# 🚀 Playwright TypeScript Automation Framework

A scalable and maintainable End-to-End (E2E) Test Automation Framework built using **Playwright** and **TypeScript**, designed following industry-standard automation practices. This framework suppo[...]

---

## 📌 Key Features

✅ Playwright with TypeScript

✅ Page Object Model (POM) Design Pattern

✅ Data-Driven Testing (JSON & CSV)

✅ Dynamic Test Data Generation using Faker

✅ Cross-Browser Testing Support

✅ Parallel & Sequential Test Execution

✅ Test Tagging (Sanity, Regression, Master, DDT)

✅ HTML & Allure Reporting

✅ Screenshot & Video Capture on Failure

✅ Retry Mechanism for Failed Tests

✅ GitHub Version Control

✅ Jenkins CI/CD Integration

✅ Scalable and Reusable Framework Structure

✅ Easy Configuration Management

---

## 🏗️ Framework Architecture

The framework follows a modular architecture to ensure maintainability, readability, and reusability.

```text
Project
│
├── pages/                 # Page Object Classes
├── tests/                 # Test Scripts
├── data/                  # Test Data Files
├── utils/                 # Utility Classes
├── playwright.config.ts   # Playwright Configuration
├── test.config.ts         # Global Test Data
├── package.json
└── README.md
```

---

## 🧩 Design Patterns Used

### Page Object Model (POM)

The framework follows the Page Object Model design pattern where:

- UI locators are separated from test logic.
- Each web page has its own class.
- Reusable page methods improve maintainability.
- Reduces code duplication across test scripts.

---

## 📂 Project Structure

### Pages

Contains page classes for application pages:

- HomePage
- RegistrationPage
- LoginPage
- LogoutPage
- MyAccountPage
- ProductPage
- SearchResultsPage
- ShoppingCartPage
- CheckoutPage

### Tests

Contains automated test scripts:

- Account Registration
- Login Validation
- Data-Driven Login Testing
- Product Search
- Add To Cart
- Logout
- End-to-End Purchase Flow

### Utilities

Reusable utilities including:

- JSON Data Reader
- CSV Data Reader
- Random Data Generator (Faker)
- Common Helper Functions

---

## 📊 Reporting

The framework generates comprehensive execution reports:

### HTML Report

Built-in Playwright HTML reporting for quick execution analysis.

### Allure Report

Provides:

- Execution Summary
- Passed/Failed Statistics
- Screenshots
- Historical Trends
- Failure Analysis

---

## 🎯 Test Execution Categories

Tests are organized using tags:

| Tag | Purpose |
|------|----------|
| @sanity | Smoke/Sanity Validation |
| @regression | Full Regression Suite |
| @master | Critical Business Flows |
| @datadriven | Data-Driven Tests |

Example:

```ts
test('@sanity User Login Test', async ({ page }) => {
  ...
});
```

---

## 🌐 Browser Support

The framework supports:

- Google Chrome
- Microsoft Edge
- Chromium-Based Browsers

It can be easily extended for:

- Firefox
- Safari/WebKit

---

## ⚡ Advanced Features

### Parallel Execution

Reduce execution time by running tests concurrently.

### Retry Mechanism

Automatically retries failed tests to handle flaky scenarios.

### Screenshot Capture

Screenshots are captured automatically for failed test cases.

### Video Recording

Execution videos are retained for failure analysis.

### Trace Viewer

Playwright tracing is enabled to simplify debugging.

---

## 🔄 CI/CD Integration

Integrated with Jenkins and GitHub to support:

- Scheduled Test Runs
- Automated Regression Testing
- Continuous Testing
- Build Validation Pipelines
- Automated Report Generation

---

## 🛠️ Technology Stack

- Playwright
- TypeScript
- Node.js
- Faker.js
- CSV
