.PHONY: install
install: ## Install the poetry environment and install the pre-commit hooks
	@echo "🚀 Creating virtual environment using pyenv and poetry"
	@poetry install --without=experiments ## NOTE may need to exclude groups here.
	@poetry run pre-commit install
	@poetry shell

.PHONY: install-dev
install-dev: install ## Developer-specific installation
	@echo "🧪 Installing dev ("experiments") deps"
	@poetry install --without=experiments
	@echo "📁 Creating data dirs at data/"
	@mkdir -p data/raw
	@mkdir -p data/int
	@mkdir -p data/fin
	@[ -f .env ] && echo "🔒🌲  .env files already exists." || (touch .env && echo "🔒🌲 Created .env file. See docs on populating it.")
	@echo "🏁 Dev installed"

.PHONY: check
check: ## Run code quality tools.
	@echo "🚀 Checking Poetry lock file consistency with 'pyproject.toml': Running poetry lock --check"
	@poetry lock --check
	@echo "🚀 Linting code: Running pre-commit"
	@poetry run pre-commit run -a
	@echo "🚀 Static type checking: Running mypy"
	@poetry run mypy
	@echo "🚀 Checking for obsolete dependencies: Running deptry"
	@poetry run deptry . --ignore-notebooks --extend-exclude .venv  --extend-exclude .tox

.PHONY: test
test: ## Test the code with pytest
	@echo "🚀 Testing code: Running pytest"
	@poetry run pytest --cov --cov-config=pyproject.toml --cov-report=xml

.PHONY: build
build: clean-build ## Build wheel file using poetry
	@echo "🚀 Creating wheel file"
	@poetry build

.PHONY: clean-build
clean-build: ## clean build artifacts
	@rm -rf dist

.PHONY: docs-test
docs-test: ## Test if documentation can be built without warnings or errors
	@poetry run mkdocs build -s

.PHONY: docs
docs: ## Build and serve the documentation
	@poetry run mkdocs serve

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

.PHONY: lab
lab: ## Launch jupyter lab
	@poetry run jupyter lab --no-browser --autoreload