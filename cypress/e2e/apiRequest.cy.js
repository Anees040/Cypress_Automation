/// <reference types="cypress" />

describe('Lab 14 - Sending Real API Requests in Cypress', () => {
  // Lab 14: Test 1 - Send real GET request and verify response
  it('Send real GET request and verify response', () => {
    // Lab 14: cy.request() sends a real HTTP request from Cypress
    // Field explanation:
    // - url: The full URL endpoint to request
    // - method: HTTP method (GET, POST, PUT, DELETE, PATCH, etc.)
    // - headers: HTTP headers object (Accept, Content-Type, Authorization, etc.)
    // - body: Used for POST/PUT/PATCH requests to send data in request body
    cy.request({
      url: 'https://www.daraz.pk',
      method: 'GET',
      headers: {
        'Accept': 'text/html'
      }
    }).then((response) => {
      // Lab 14: Assert the response status code is 200 (success)
      expect(response.status).to.equal(200);

      // Lab 14: Log the status for verification
      cy.log(`Response Status: ${response.status}`);
    });
  });

  // Lab 14: Test 2 - Send GET request to search endpoint
  it('Send GET request to search endpoint', () => {
    // Lab 14: Send a GET request to the catalog search endpoint with query parameters
    cy.request({
      url: 'https://www.daraz.pk/catalog/?q=Laptops&ajax=true',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // Lab 14: Assert the response status is 200
      expect(response.status).to.equal(200);

      // Lab 14: Log the first 200 characters of the response body for inspection
      const bodyString = JSON.stringify(response.body).substring(0, 200);
      cy.log(`Response Body (first 200 chars): ${bodyString}`);
    });
  });

  // Lab 14: Test 3 - Combine intercept + request
  it('Combine intercept + request', () => {
    // Lab 14: First, send a real cy.request() to the homepage
    cy.request({
      url: 'https://www.daraz.pk',
      method: 'GET'
    }).then((response) => {
      // Lab 14: Verify the real request was successful
      expect(response.status).to.equal(200);
      cy.log('Real GET request successful');
    });

    // Lab 14: Now set up an intercept to mock a subsequent catalog request
    cy.intercept('GET', '**/catalog/**', {
      body: {
        statusCode: 200,
        items: [
          { name: 'Intercepted Product', price: 25000 }
        ]
      }
    }).as('catalogAPI');

    // Lab 14: Visit the page which will trigger the intercepted call
    cy.visit('https://www.daraz.pk');

    // Lab 14: Perform a search to trigger the catalog endpoint
    cy.get('input#q').type('Tablets');
    cy.get('button.search-box__button--1oH7').click({ force: true });

    // Lab 14: Wait for and verify the intercepted request
    cy.wait('@catalogAPI').then((interception) => {
      expect(interception.response.body.statusCode).to.equal(200);
      cy.log('Intercepted request verified after real request');
    });
  });
});
