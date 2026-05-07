describe('Signup Test Cases', () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit('https://www.daraz.pk');
  });

  it('Check Signup Link Exists', () => {
    cy.contains('Signup').should('exist').click();
    cy.contains('Create your Daraz Account').should('exist');
  });

  it.only('Check Fields on Signup Interactable', () => {
    // Click Signup link
    cy.contains('Signup').click();

    // Type phone number
    cy.get('.mod-login-input-phone input').type('03117995371');

    // Type password
    cy.get('.mod-login-input-password input').type('Asimwattoo123$');

    // Select month
    cy.get('#month').click();
    cy.contains('March').click();

    // Select day
    cy.get('#day').click();
    cy.contains('13').click();

    // Select year
    cy.get('#year').click();
    cy.contains('2003').click();

    // Select gender
    cy.get('#gender').click();
    cy.contains('male').click();

    // Type name
    cy.get('.mod-login-input-name').type('Muhammad Asim');

    // Simulate slider drag on captcha element
    cy.get('#nc_2_n1z')
      .trigger('mousedown')
      .trigger('mousemove', { clientX: 800, clientY: 100 })
      .trigger('mouseup');

    // Pause to inspect
    cy.pause();
  });
});
