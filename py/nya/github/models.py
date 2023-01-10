import base64

from pydantic import BaseModel, ByteSize, Field

# class ContentFileLinks(BaseModel):
#     url: str = Field(default=..., alias="self")
#     git: str
#     html: str


class ContentFile(BaseModel):
    name: str
    path: str
    sha: str
    size: ByteSize
    url: str
    html_url: str
    git_url: str
    download_url: str
    typ: str = Field(default=..., alias="type")
    content: str  # base64 str
    encoding: str
    # _links: ContentFileLinks = Field(default=..., alias="links") # Already covered by others.

    class Config:
        github_api_obj = True

    def decode_content(self) -> str:
        assert self.encoding == "base64", f"unsupported encoding: {self.encoding}"
        return base64.b64decode(bytearray(self.content, "utf-8")).decode("utf8")

    @property
    def is_readme(self) -> bool:
        return self.name.lower().startswith("readme")

    def as_readme(self) -> "ReadmeFile":
        if not self.is_readme:
            raise ValueError(f"File '{self.name}' is not a readme.")
        return ReadmeFile.parse_obj({**self.dict(), "text": self.decode_content()})


class ReadmeFile(BaseModel):
    name: str
    path: str
    sha: str
    size: ByteSize
    url: str
    html_url: str
    git_url: str
    download_url: str

    text: str

    class Config:
        github_api_obj = False


# @classmethod
# def parse_obj(cls, obj: Any) -> "ReadmeFile":

#     super().parse_obj
