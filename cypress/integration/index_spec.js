var data = require("./data/data.json");

describe('visit contact us and enter form', () => {
    it('Visits the incentive games website', () => {
      // Read URL from JSON 
      cy.visit(data.url)
      // Find parent class and then find contact us element within that and click
      cy.get('.nav-primary').contains('Contact Us').click()
    })
  })
  