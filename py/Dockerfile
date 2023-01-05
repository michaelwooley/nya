# syntax=docker/dockerfile:1
# TODO #8 Fix or remove dockerfile
FROM python:3.9-slim-buster

ENV POETRY_VERSION=1.1.13 \
    POETRY_VIRTUALENVS_CREATE=false

# Install poetry
RUN pip install "poetry==$POETRY_VERSION"

# Copy only requirements to cache them in docker layer
WORKDIR /code
COPY poetry.lock pyproject.toml /code/

# Project initialization:
RUN poetry install --no-interaction --no-ansi --no-root --no-dev

# Copy Python code to the Docker image
COPY nya /code/nya/

CMD [ "python", "nya/foo.py"]