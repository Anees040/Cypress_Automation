/// <reference types="cypress" />

describe('Sign In', () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit('https://www.daraz.pk/');
  });

  it('Check Sign In Link on Home Page', () => {
    cy.contains('login').should('exist');
  });

  it('Check Login Fields', () => {
    cy.contains('login').click();
    cy.contains('Error').should('not.exist');
    cy.get('div.mod-login-input-loginName input').type('03117995371');
    cy.get('div.mod-input-password input').type('Asimwattoo123$');
  });

  it('Check Login Error Shows on Invalid Data', () => {
    cy.contains('login').click();
    cy.contains('Error').should('not.exist');
    cy.get('div.mod-login-input-loginName input').type('invalidnumber');
    cy.get('div.mod-input-password input').type('invalidpassword');
    cy.get('div.mod-login-btn > button').click();
    cy.contains('Error').should('exist');
  });

  it.only('Check Login With Number and Password', () => {
    cy.contains('login').click();
    cy.contains('Error').should('not.exist');
    cy.fixture('credentials.json').then((data) => {
      cy.get('div.mod-login-input-loginName input').type(data.number);
      cy.get('div.mod-input-password input').type(data.password);
      cy.get('div.mod-login-btn > button').click();
      cy.url().should('eq', 'https://www.daraz.pk/');
    });
  });
});
