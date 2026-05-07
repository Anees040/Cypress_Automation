# Cypress Automation Test Suite

> Comprehensive end-to-end testing framework for e-commerce platform automation using Cypress, featuring API mocking, request interception, and intelligent test coverage.

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green)](https://nodejs.org/)
[![Cypress](https://img.shields.io/badge/Cypress-v15+-blue)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Technology Stack](#technology-stack)
- [Best Practices](#best-practices)
- [Support Files](#support-files)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## 🎯 Overview

This repository contains a comprehensive suite of automated end-to-end tests built with Cypress for validating critical functionalities of a modern e-commerce platform. The test automation framework is designed to ensure reliability, maintainability, and scalability through modular test organization, reusable fixtures, and custom command implementations.

### What's Included

- ✅ User authentication workflows (sign-up & sign-in)
- ✅ Product search and filtering capabilities
- ✅ Shopping cart operations and management
- ✅ Real API request testing with response validation
- ✅ API mocking and request interception techniques
- ✅ Comprehensive fixture-based test data management
- ✅ Custom Cypress command implementations

## ⭐ Key Features

| Feature | Description |
|---------|-------------|
| **User Authentication** | Sign-up and sign-in workflows with validation |
| **Product Discovery** | Search, filtering, and product catalog navigation |
| **Cart Management** | Add-to-cart, quantity updates, and checkout flows |
| **API Testing** | Real HTTP requests with response assertions |
| **API Mocking** | Intercept and mock API responses for deterministic testing |
| **Fixture Management** | Centralized test data with reusable credentials |
| **Custom Commands** | Helper functions for complex test operations |
| **Cross-Browser Ready** | Compatible with Chrome, Firefox, Edge |

## 📁 Project Structure

```
Cypress_Automation/
├── cypress/
│   ├── e2e/
│   │   ├── signin.cy.js          # User authentication (sign-in)
│   │   ├── signup.cy.js          # User registration workflows
│   │   ├── search.cy.js          # Product search and filtering
│   │   ├── cart.cy.js            # Shopping cart operations
│   │   ├── apiRequest.cy.js      # Real API request testing
│   │   └── apiMocking.cy.js      # API mocking and interception
│   │
│   ├── fixtures/
│   │   └── credentials.json      # Test account credentials and data
│   │
│   └── support/
│       ├── commands.js           # Custom Cypress commands
│       └── e2e.js                # Global e2e test setup
│
├── cypress.config.js             # Cypress configuration
├── package.json                  # Project dependencies and scripts
├── .gitignore                    # Git ignore patterns
└── README.md                     # This file
```

## 🔧 Prerequisites

- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher (or yarn v1.22.0+)
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Edge, or Safari

### System Requirements

- **OS**: Windows, macOS, or Linux
- **RAM**: Minimum 2GB (4GB recommended)
- **Disk Space**: 200MB for project + dependencies

## 📦 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Anees040/Cypress_Automation.git
cd Cypress_Automation
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- Cypress v15.14.2
- All required dependencies and devDependencies

### Step 3: Verify Installation

```bash
npx cypress --version
```

## ⚙️ Configuration

### Base Configuration

The test suite is pre-configured in `cypress.config.js`:

```javascript
{
  baseUrl: "https://www.daraz.pk",
  viewportWidth: 1280,
  viewportHeight: 786,
  apiUrl: "https://www.daraz.pk"
}
```

### Custom Configuration

To modify configuration:

1. Edit `cypress.config.js`
2. Update the `baseUrl` and `apiUrl` properties
3. Adjust `viewportWidth` and `viewportHeight` as needed
4. Restart Cypress

### Environment Variables

Create a `.env` file (not committed to git):

```env
# API Configuration
API_URL=https://www.daraz.pk
BASE_URL=https://www.daraz.pk

# Test Timeouts
DEFAULT_TIMEOUT=10000
```

## 🚀 Running Tests

### Interactive Mode (Recommended for Development)

```bash
npm run cy:open
```

This launches the Cypress Test Runner where you can:
- View all available test files
- Run individual test files
- Run specific test cases
- Watch test execution in real-time
- Debug test failures with DevTools
- Inspect DOM elements during tests

### Headless Mode (Recommended for CI/CD)

```bash
npm run cy:run
```

This runs all tests in headless mode:
- Faster execution
- No GUI overhead
- Suitable for automated pipelines
- Generates detailed reports

### Run Specific Test File

```bash
npm run cy:run -- --spec cypress/e2e/signin.cy.js
```

### Run with Specific Browser

```bash
npm run cy:run -- --browser chrome
npm run cy:run -- --browser firefox
npm run cy:run -- --browser edge
```

## 📊 Test Coverage

### Authentication Tests (`signin.cy.js` & `signup.cy.js`)

- ✅ Valid user registration
- ✅ Duplicate account prevention
- ✅ Login with valid credentials
- ✅ Login with invalid credentials
- ✅ Password validation
- ✅ Session management

### Search Tests (`search.cy.js`)

- ✅ Product search by keyword
- ✅ Search result validation
- ✅ Filter by price range
- ✅ Filter by category
- ✅ Sort functionality
- ✅ Pagination navigation

### Cart Tests (`cart.cy.js`)

- ✅ Add product to cart
- ✅ Update item quantity
- ✅ Remove item from cart
- ✅ Cart persistence
- ✅ Checkout validation
- ✅ Price calculation

### API Tests (`apiRequest.cy.js`)

- ✅ GET request validation
- ✅ POST request handling
- ✅ Response status codes
- ✅ Response body structure
- ✅ Error handling
- ✅ Request timeout scenarios

### API Mocking Tests (`apiMocking.cy.js`)

- ✅ Request interception
- ✅ Response mocking
- ✅ Error simulation
- ✅ Data consistency validation
- ✅ Performance testing with mocks

## 🛠 Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Cypress** | E2E Testing Framework | 15.14.2 |
| **JavaScript** | Test Scripting Language | ES6+ |
| **Node.js** | JavaScript Runtime | 14+ |
| **npm** | Package Manager | 6+ |

## 💡 Best Practices

### Test Organization
- Tests are logically organized by feature/functionality
- Each test file focuses on a single feature domain
- Tests are independent and can run in any order

### Test Data Management
- Credentials and test data are centralized in `fixtures/`
- Sensitive data is excluded via `.gitignore`
- Fixture data is reusable across multiple tests

### Custom Commands
- Reusable operations are encapsulated in custom commands
- Commands reduce code duplication
- Commands make tests more readable and maintainable

### API Mocking Benefits
- Tests don't depend on external API availability
- Enables testing error scenarios safely
- Improves test reliability and speed
- Allows controlled data validation

### Code Quality
- Consistent naming conventions
- Descriptive test names and comments
- DRY (Don't Repeat Yourself) principles
- Proper error handling and assertions

## 📄 Support Files

### `cypress/support/commands.js`
Custom Cypress commands for:
- Login operations
- Navigation helpers
- Form interactions
- Element validations
- API operations

### `cypress/support/e2e.js`
Global configuration for:
- Test setup and teardown
- Global hooks
- Error handling
- Logging configuration

### `cypress/fixtures/credentials.json`
Test data including:
- Valid test credentials
- Invalid test credentials
- Test user information
- API test data

## 🔍 Troubleshooting

### Tests Won't Run

**Issue**: Tests fail to execute
```bash
# Clear Cypress cache
npx cypress cache clear

# Reinstall dependencies
rm -rf node_modules
npm install

# Run again
npm run cy:run
```

### Element Not Found Errors

**Solution**: 
- Increase default timeout in `cypress.config.js`
- Verify selectors match current DOM structure
- Check for dynamic content loading delays

### API Request Failures

**Solution**:
- Verify `baseUrl` and `apiUrl` are correct
- Check network connectivity
- Review API authentication requirements
- Enable network tab in DevTools

### Timeout Issues

**Solution**:
```javascript
// Increase timeout for specific commands
cy.visit(url, { timeout: 10000 })
cy.get(selector, { timeout: 10000 })
```

## 📝 License

ISC License - See LICENSE file for details

---

**Repository**: [https://github.com/Anees040/Cypress_Automation](https://github.com/Anees040/Cypress_Automation)

**Questions or Issues?** Open an issue on GitHub or contact the maintainers.
      { name: 'Monitor', price: 15000 }
    ]
  }
}).as('searchAPI');

// Wait and verify
cy.wait('@searchAPI').then((interception) => {
  expect(interception.response.body.totalResults).to.equal(2);
});
```

## cy.request() — All Fields Explained

`cy.request()` sends a real HTTP request from Cypress and returns the response.

### Configuration Object Fields:

```javascript
cy.request({
  // Required: The full URL to request
  url: 'https://www.daraz.pk/catalog/?q=Laptops',
  
  // Required: HTTP method
  method: 'GET',
  
  // Optional: HTTP headers to send
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  
  // Optional: Request body (used for POST, PUT, PATCH)
  body: {
    username: 'user@email.com',
    password: 'secret123'
  }
}).then((response) => {
  expect(response.status).to.equal(200);
  expect(response.body).to.have.property('items');
});
```

## Spy Mode vs Stub Mode

### Spy Mode (No 3rd Argument)
```javascript
// No third argument = intercept but let real response through
cy.intercept('GET', '**/catalog/**').as('spyRequest');
// The real API response is returned, but we can assert on the request
```

**Use when:** You want to verify a request was made but don't care about mocking the response.

### Stub Mode (With 3rd Argument)
```javascript
// Third argument = replace response with mock data
cy.intercept('GET', '**/catalog/**', {
  body: { /* mock data */ }
}).as('stubRequest');
// The mock response is returned, real API is never called
```

**Use when:** You want to control the response or test specific scenarios.

## How to Run the Tests

### Open Cypress Test Runner
```bash
npm run cy:open
```
This opens an interactive Cypress window where you can click on test files to run them.

### Run Tests Headlessly
```bash
npm run cy:run
```
This runs all tests in the terminal without opening a browser.

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/apiMocking.cy.js"
```

## Project Structure

```
cypress/
├── e2e/
│   ├── apiMocking.cy.js      # Tests using cy.intercept()
│   ├── apiRequest.cy.js      # Tests using cy.request()
│   ├── signup.cy.js          # Signup form tests
│   ├── signin.cy.js          # Sign-in tests
│   ├── search.cy.js          # Search and filter tests
│   └── cart.cy.js            # Cart functionality tests
├── fixtures/
│   └── credentials.json      # Test data (user credentials)
├── support/
│   ├── e2e.js               # Test setup and imports
│   └── commands.js          # Custom Cypress commands
└── cypress.config.js         # Cypress configuration

package.json                   # Project dependencies and scripts
```

## Key Takeaways

1. **cy.intercept()** - Intercepts and optionally mocks HTTP requests
2. **cy.request()** - Sends real HTTP requests from Cypress
3. **Use inline body** - Mock data directly in the intercept, not fixture files
4. **Always alias** - Use `.as("name")` for all intercepts to wait on them
5. **Always wait** - Use `cy.wait("@alias")` to verify intercepts were called
