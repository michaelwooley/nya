"""Github API client (partial)"""
import datetime
from pathlib import Path

import requests
import requests_cache
import tenacity
from pydantic import BaseModel, SecretStr


class GithubRateLimit(BaseModel):
    limit: int
    remaining: int
    reset: datetime.datetime
    used: int
    resource: str

    @classmethod
    def parse_res(cls, r: requests.Response) -> "GithubRateLimit":
        return cls.parse_obj(
            {
                k.split("-")[-1].lower(): v
                for k, v in r.headers.items()
                if k.lower().startswith("x-ratelimit-")
            }
        )


class GithubRateLimitCollection(BaseModel):
    core: GithubRateLimit
    search: GithubRateLimit
    graphql: GithubRateLimit
    integration_manifest: GithubRateLimit
    source_import: GithubRateLimit
    code_scanning_upload: GithubRateLimit
    actions_runner_registration: GithubRateLimit
    scim: GithubRateLimit
    dependency_snapshots: GithubRateLimit


class GithubSession:
    token: SecretStr
    cache_path: Path
    session: requests.Session

    _rl: GithubRateLimitCollection

    def __init__(self, token: str, cache_path: Path):
        self.token = SecretStr(token)
        self.cache_path = Path(cache_path)
        self.session = self._init_session(token=self.token, cache_path=self.cache_path)
        self._rl = self._init_rate_limit(session=self.session)

    @staticmethod
    def _init_session(token: SecretStr, cache_path: Path) -> requests.Session:
        session_backend = requests_cache.SQLiteCache(cache_path)
        session = requests_cache.CachedSession(
            backend=session_backend,
            expire_after=0.0001,
            should_strip_auth=True,
            ignored_parameters=["Authorization"],
            urls_expire_after={
                "*.github.com": 0.0001,  # Placeholder expiration; should be overridden by Cache-Control
                "*": requests_cache.DO_NOT_CACHE,  # Don't cache anything other than GitHub requests
            },
        )
        session.headers["Authorization"] = f"Bearer {token.get_secret_value()}"
        return session

    @tenacity.retry(
        wait=tenacity.wait.wait_exponential(multiplier=1, min=0, max=10),
        retry=tenacity.retry.retry_if_exception(requests.HTTPError),
    )
    @staticmethod
    def _init_rate_limit(session: requests.Session) -> GithubRateLimitCollection:
        url = "https://api.github.com/rate_limit"
        res = session.get(url)
        res.raise_for_status()
        rl = res.json()
        return GithubRateLimitCollection.parse_obj(
            {k: {**v, "resource": k} for k, v in rl["resources"].items()}
        )

    def _update_rate_limit(self, res: requests.Response) -> None:
        nrl = GithubRateLimit.parse_res(res)
        setattr(self._rl, nrl.resource, nrl)
        return None

    @property
    def rate_limit(self) -> GithubRateLimit:
        return self._rl.core

    def get_repo(self, owner: str, repo: str) -> requests.Response:
        url = f"https://api.github.com/repos/{owner}/{repo}"
        res = self.session.get(url)
        self._update_rate_limit(res)
        res.raise_for_status()
        return res
