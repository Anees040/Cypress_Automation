# Cypress Automation Test Suite

Comprehensive end-to-end testing framework for e-commerce platform automation using Cypress, featuring API mocking, request interception, and multi-scenario test coverage.

## Overview

This project contains a suite of automated end-to-end tests built with Cypress for validating core functionalities of an e-commerce application. The test suite covers user authentication, search operations, cart management, and API interactions with both real requests and mocked responses.

## Features

- **User Authentication**: Sign-up and sign-in test scenarios
- **Search Functionality**: Product search and filtering validation
- **Cart Management**: Add-to-cart and cart operations
- **API Testing**: Real API requests with response validation
- **API Mocking**: Intercept and mock API responses for controlled testing
- **Fixture-Based Test Data**: Reusable credentials and test data
- **Custom Commands**: Helper functions for common test operations

## Project Structure

```
cypress/
├── e2e/                          # End-to-end test files
│   ├── signin.cy.js             # User sign-in tests
│   ├── signup.cy.js             # User registration tests
│   ├── search.cy.js             # Product search tests
│   ├── cart.cy.js               # Shopping cart tests
│   ├── apiRequest.cy.js         # Real API request tests
│   └── apiMocking.cy.js         # API mocking tests
├── fixtures/                     # Test data and fixtures
│   └── credentials.json         # Test credentials
└── support/                      # Support files and commands
    ├── commands.js              # Custom Cypress commands
    └── e2e.js                   # E2E configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Anees040/Cypress_Automation.git
cd Cypress_Automation
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The test suite is configured to run against:
- **Base URL**: https://www.daraz.pk
- **Viewport**: 1280x786 (Standard desktop resolution)

Configuration is defined in `cypress.config.js`.

## Running Tests

### Open Cypress Interactive Mode
```bash
npm run cy:open
```

This launches the Cypress Test Runner where you can:
- View all test files
- Run individual or all tests
- Watch test execution in real-time
- Debug test failures

### Run Tests in Headless Mode
```bash
npm run cy:run
```

This runs all tests in headless mode and generates test reports.

## Test Scenarios

### Authentication Tests
- **Sign-Up**: Validates user registration workflow
- **Sign-In**: Validates user login with valid credentials

### Product Tests
- **Search**: Product discovery and search filtering
- **Cart Operations**: Add items to cart and manage cart

### API Tests
- **API Requests**: Direct API calls with response validation
- **API Mocking**: Intercept API responses for controlled testing scenarios

## Technologies Used

- **Cypress**: End-to-end testing framework
- **JavaScript**: Test scripting language
- **Node.js**: Runtime environment

## Best Practices

- Tests are organized by functionality
- Test data is centralized in fixtures
- Custom commands encapsulate common operations
- API mocking enables deterministic testing
- Tests are designed to be independent and reusable

## Support Files

- **commands.js**: Contains custom Cypress commands for reusable test operations
- **e2e.js**: Global configuration and setup for end-to-end tests
- **credentials.json**: Fixture containing test account credentials

## Notes

- Tests require active internet connection for real API requests (apiRequest.cy.js)
- API mocking tests are independent of server availability
- Test execution time varies based on network conditions

## License

ISC

## Author

Anees040
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
