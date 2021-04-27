Cypress.Commands.add('visitContactUsURL', () => {
    cy.get('.nav-primary').contains('Contact Us')
      .should('be.visible').click()
  })