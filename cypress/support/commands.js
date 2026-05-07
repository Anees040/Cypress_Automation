Cypress.Commands.add('login', () => {
  // Click the login text
  cy.contains('login').click();
  
  // Assert no "Error" exists
  cy.contains('Error').should('not.exist');
  
  // Load credentials from fixtures/credentials.json
  cy.fixture('credentials.json').then((credentials) => {
    // Type the number into div.mod-login-input-loginName input
    cy.get('div.mod-login-input-loginName input').type(credentials.number);
    
    // Type the password into div.mod-input-password input
    cy.get('div.mod-input-password input').type(credentials.password);
    
    // Click div.mod-login-btn > button
    cy.get('div.mod-login-btn > button').click();
    
    // Assert URL equals https://www.daraz.pk/ with a 10 second timeout
    cy.url({ timeout: 10000 }).should('eq', 'https://www.daraz.pk/');
  });
});
