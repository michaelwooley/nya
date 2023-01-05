# nya

[![Release](https://img.shields.io/github/v/release/michaelwooley/nya)](https://img.shields.io/github/v/release/michaelwooley/nya)
[![Build status](https://img.shields.io/github/actions/workflow/status/michaelwooley/nya/main.yml?branch=main)](https://github.com/michaelwooley/nya/actions/workflows/main.yml?query=branch%3Amain)
<!--[![codecov](https://codecov.io/gh/michaelwooley/nya/branch/main/graph/badge.svg)](https://codecov.io/gh/michaelwooley/nya) -->
[![Commit activity](https://img.shields.io/github/commit-activity/m/michaelwooley/nya)](https://img.shields.io/github/commit-activity/m/michaelwooley/nya)
[![License](https://img.shields.io/github/license/michaelwooley/nya)](https://img.shields.io/github/license/michaelwooley/nya)

No, you're awesome. (Python side.)

- 💾 **Github repository**: <https://github.com/michaelwooley/nya/>
- 📖 **Documentation** <https://michaelwooley.github.io/nya/>

# Development

## Setup

Pre-reqs:

- `make`
- `pyenv`
- `python>=3.10`
- `poetry>=1.3.0`

```bash
# Clone repo
git clone git@github.com:michaelwooley/nya.git

# Go to python part
cd nya/py

# install
make install

# View all make commands
make
```


## [ignore] Getting started with your project

First, create a repository on GitHub with the same name as this project, and then run the following commands:

``` bash
git init -b main
git add .
git commit -m "init commit"
git remote add origin git@github.com:michaelwooley/nya.git
git push -u origin main
```

Finally, install the environment and the pre-commit hooks with

```bash
make install
```

You are now ready to start development on your project! The CI/CD
pipeline will be triggered when you open a pull request, merge to main,
or when you create a new release.

To finalize the set-up for publishing to PyPi or Artifactory, see
[here](https://fpgmaas.github.io/cookiecutter-poetry/features/publishing/#set-up-for-pypi).
For activating the automatic documentation with MkDocs, see
[here](https://fpgmaas.github.io/cookiecutter-poetry/features/mkdocs/#enabling-the-documentation-on-github).
To enable the code coverage reports, see [here](https://fpgmaas.github.io/cookiecutter-poetry/features/codecov/).

## Releasing a new version

TODO #2 Python release process.


---

Repository initiated with [`fpgmaas/cookiecutter-poetry`](https://github.com/fpgmaas/cookiecutter-poetry) ([docs](https://fpgmaas.github.io/cookiecutter-poetry)).