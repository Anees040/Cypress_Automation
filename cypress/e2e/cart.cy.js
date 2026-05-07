/// <reference types="cypress" />

describe('Cart Test Cases', () => {
  before(() => {
    cy.viewport(1280, 786);
    cy.visit('https://www.daraz.pk/');
    cy.login();
  });

  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit('https://www.daraz.pk');
    
    // Handle uncaught exceptions gracefully
    cy.on('uncaught:exception', () => false);
  });

  it('Check Product Adding to cart', () => {
    // Search for Keyboards
    cy.get('input#q').type('Keyboards');
    
    // Click search button with force
    cy.get('button.search-box__button--1oH7').click({ force: true });
    
    // Click first product in results
    cy.get('.gridItem--Yd0sa a').first().click();
    
    // Click Add to Cart button
    cy.contains('Add to Cart').click();
  });

  it.only('Select all items in the cart', () => {
    // Declare variables to track totals
    let total = 0;
    let shipping = 0;

    // Click cart icon
    cy.get('.lzd-nav-cart').click();

    // Assert URL includes 'cart'
    cy.url().should('include', 'cart');

    // Click select all checkbox
    cy.get('.list-header-container input[type="checkbox"]').click();

    // Assert cart items exist using .its() to get collection length
    // .its('length') is equivalent to getting the length property
    cy.get('.cart-item').its('length').should('be.gt', 0);

    // Loop through each cart item and sum the prices
    cy.get('.cart-item').each((item) => {
      const priceText = item.find('.current-price').text();
      const priceValue = parseInt(priceText.split(' ')[1].replace(/,/g, ''));
      total += priceValue;
    });

    // Wait for any async operations
    cy.wait(2000);

    // Get shipping cost from last summary value
    cy.get('.checkout-summary-noline-value').last().then((shippingEl) => {
      const shippingText = shippingEl.text();
      shipping = parseInt(shippingText.split(' ')[1].replace(/,/g, ''));
    });

    // Get order total and verify calculation
    cy.get('.checkout-order-total-fee').then((totalEl) => {
      const totalText = totalEl.text();
      const actualTotal = parseInt(totalText.split(' ')[1].replace(/,/g, ''));
      
      // Log for debugging
      cy.log(`Item Total: ${total}, Shipping: ${shipping}, Expected Total: ${total + shipping}, Actual Total: ${actualTotal}`);
      
      // Assert calculated total matches actual total
      expect(total + shipping).to.eq(actualTotal);
    });
  });
});
