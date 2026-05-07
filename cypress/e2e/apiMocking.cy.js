/// <reference types="cypress" />

describe('Lab 14 - API Mocking on Daraz', () => {
  // Lab 14: Test 1 - Intercept and mock search API with inline body
  it('Intercept and mock search API with inline body (no fixture file)', () => {
    
    cy.intercept('GET', '**/catalog/**', {
      body: {
        statusCode: 200,
        totalResults: 2,
        items: [
          { name: 'Mocked Product 1', price: 50000 },
          { name: 'Mocked Product 2', price: 80000 }
        ]
      }
    }).as('searchAPI');

    // Lab 14: Visit the Daraz homepage
    cy.visit('https://www.daraz.pk');

    // Lab 14: Type search term into the search input
    cy.get('input#q').type('Laptops');

    // Lab 14: Click the search button with force to ensure it's clickable
    cy.get('button.search-box__button--1oH7').click({ force: true });

    // Lab 14: Wait for the intercepted API call and verify the mock response
    cy.wait('@searchAPI').then((interception) => {
      // Lab 14: Assert the status code is 200
      expect(interception.response.statusCode).to.equal(200);

      // Lab 14: Assert the total results is 2
      expect(interception.response.body.totalResults).to.equal(2);

      // Lab 14: Assert items is an array with length 2
      expect(interception.response.body.items).to.be.an('array').with.length(2);
    });
  });

  // Lab 14: Test 2 - Spy on API without mocking — let real response through
  it('Spy on API without mocking — let real response through', () => {
   
    cy.intercept('GET', '**/catalog/**').as('spySearch');

    // Lab 14: Visit daraz and perform a search
    cy.visit('https://www.daraz.pk');
    cy.get('input#q').type('Phones');
    cy.get('button.search-box__button--1oH7').click({ force: true });

    // Lab 14: Wait for the spied request and verify the real response
    cy.wait('@spySearch').then((interception) => {
      // Lab 14: Assert response status code is 200 (real response)
      expect(interception.response.statusCode).to.equal(200);

      // Lab 14: Log the status for visibility
      cy.log(`Real API Response Status: ${interception.response.statusCode}`);
    });
  });

  // Lab 14: Test 3 - Mock POST request with inline body
  it('Mock POST request with inline body', () => {
    // Lab 14: Mock a POST request to login endpoint with inline body response
    // This intercepts POST requests to /member/login/** and returns mocked login success
    cy.intercept('POST', '**/member/login/**', {
      body: {
        code: 200,
        message: 'mocked login success'
      }
    }).as('loginAPI');

    // Lab 14: Visit daraz and click the login link
    cy.visit('https://www.daraz.pk');
    cy.contains('login').click();

    // Lab 14: Wait for the intercepted POST request
    cy.wait('@loginAPI').then((interception) => {
      // Lab 14: Assert the request method is POST
      expect(interception.request.method).to.equal('POST');

      // Lab 14: Verify the response contains mocked data
      expect(interception.response.body.code).to.equal(200);
      expect(interception.response.body.message).to.equal('mocked login success');
    });
  });
});
