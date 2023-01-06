"""Project config"""


from pathlib import Path

from pydantic import BaseSettings, Field, SecretStr

ROOT_DIR = Path(__file__).parent.parent


class Settings(BaseSettings):
    """Project config"""

    root_dir: Path = Field(default=ROOT_DIR, description="Top-level of python pkg")

    github_token: SecretStr = Field(
        ...,
        env="GITHUB_PERSONAL_ACCESS_TOKEN",
        description="GitHub personal access token for GH api.",
    )

    class Config:
        # env_prefix = 'my_prefix_'  # defaults to no prefix, i.e. ""
        fields = {
            "auth_key": {
                "env": "my_auth_key",
            },
            "redis_dsn": {"env": ["service_redis_dsn", "redis_url"]},
        }


settings = Settings()
