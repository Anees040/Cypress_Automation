/// <reference types="cypress" />

describe('Search and Filter Products', () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit('https://www.daraz.pk');
  });

  it('Searching via TextBox', () => {
    // Get search input and verify it exists
    cy.get('input#q').should('exist');
    
    // Type search term
    cy.get('input#q').type('Drones');
    
    // Click search button with force to ensure it's clickable
    cy.get('button.search-box__button--1oH7').click({ force: true });
    
    // Get search results container and assert it exists
    cy.get('div.tips--QRnmZ').should('exist');
    
    // Use .then() to access the element and use expect() for assertions
    cy.get('div.tips--QRnmZ').then((element) => {
      expect(element.text()).to.include('Drones');
    });
  });

  it('Category Wise Filtering', () => {
    // Navigate to Electronic Devices category
    cy.contains('Electronic Devices').should('exist').click();
    
    // Hover over Smart Phones category using trigger
    cy.contains('Smart Phones').trigger('mouseover');
    
    // Click Apple iPhones subcategory with force
    cy.contains('Apple iPhones').click({ force: true });
    
    // Verify the page title includes Apple iPhones
    cy.get('.title--Xj2oo').should('include.text', 'Apple iPhones');
  });

  it('Product Filtering', () => {
    // Declare variable to store brand name
    let brand = '';
    
    // Search for Drones
    cy.get('input#q').type('Drones');
    cy.get('button.search-box__button--1oH7').click({ force: true });
    
    // Check the first checkbox filter
    // Note: eq() can be used as alternative to .first(): cy.get('selector').eq(0)
    cy.get('.checkbox--tqPns.ant-checkbox-wrapper input').first().check();
    
    // Get the first checkbox wrapper, extract the brand text from last child
    // Note: its() can be used to get a property directly: cy.get(...).its('text')
    cy.get('.checkbox--tqPns.ant-checkbox-wrapper').first().children().last().then((el) => {
      brand = el.text();
      cy.get('.ant-tag').should('include.text', brand);
    });
  });
});
