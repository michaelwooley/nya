"""Project config"""


from pathlib import Path

from pydantic import BaseSettings, Field, SecretStr

ROOT_DIR = Path(__file__).parent.parent
DOTENV_PATH = ROOT_DIR.joinpath(".env")


class Settings(BaseSettings):
    """Project config"""

    root_dir: Path = Field(default=ROOT_DIR, description="Top-level of python pkg")

    github_token: SecretStr = Field(
        ...,
        env="GITHUB_PERSONAL_ACCESS_TOKEN",
        description="GitHub personal access token for GH api.",
    )
    github_cache_path: Path = Field(
        default=ROOT_DIR.joinpath("data/raw/github_api_cache.db"),
        description="Path to github api cache.",
    )

    class Config:
        env_file = DOTENV_PATH
        env_file_encoding = "utf-8"


settings = Settings()
