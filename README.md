# 🛠️ Continuous Integration (CI) Setup for FastAPI & Node.js Projects

This repository provides CI configurations for two backend applications: one built with **FastAPI (Python)** and the other with **Node.js (Express)**. Each project includes a dedicated GitHub Actions workflow to run tests and generate code coverage reports.

## 📁 Project Structure

```bash
github-actions
├── .github/
│   └── workflows/
│       ├── ci-fastapi.yml   # CI workflow for FastAPI app
│       └── ci-nodejs.yml    # CI workflow for Node.js (Express) app
├── fastapi/                 # FastAPI application
│   ├── app/                 # Source code
│   ├── tests/               # Unit tests (Pytest)
│   ├── requirements.txt     # Python dependencies
│   └── pytest.ini           # Pytest configuration
└── nodejs/                  # Node.js (Express) application
    ├── index.js             # App entry point
    ├── server.js            # Express server setup
    ├── tests/               # Unit tests (Jest or Mocha)
    ├── package.json         # Project dependencies
    └── package-lock.json    # Dependency lock file
```

## ⚙️ GitHub Actions Workflows

### 🔹 FastAPI CI — ci-fastapi.yml

- **Trigger:** On push or pull request to the main branch
- **Python Versions Tested:** 3.9, 3.10, 3.11

**Steps:**

1. Checkout the repository
2. Set up Python environment
3. Install dependencies via pip
4. Run tests with pytest and generate coverage
5. Append coverage summary to GitHub Actions summary
6. Upload full test log as an artifact

📄 Coverage logs saved as `result_<python-version>.log` (e.g., `result_3.10.log`)

### 🔸 Node.js (Express) CI — ci-nodejs.yml

- **Trigger:** On push or pull request to the main branch
- **Node Versions Tested:** 18, 20, 21

**Steps:**

1. Checkout the repository
2. Set up Node.js environment
3. Install dependencies via npm
4. Run tests with coverage
5. Append coverage summary to GitHub Actions summary
6. Upload full test log as an artifact

📄 Coverage logs saved as `result_<node-version>.log` (e.g., `result_20.log`)

## 📦 Artifacts

Both workflows store full coverage logs as downloadable artifacts in GitHub Actions. These logs provide detailed test output for further analysis.

## 📝 Notes

- Ensure that your test frameworks (`pytest`, `jest`, etc.) are properly configured to output coverage reports.

- These workflows are customizable—feel free to extend them with linting, builds, or deployments.

## 🤝 Contributions

You're welcome to fork this repository and enhance the CI pipelines to support more languages, tools, or features.
