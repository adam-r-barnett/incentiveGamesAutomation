const data = require("./data/data.json");

describe('visit contact us homepage from index', () => {
    it('navigate to contact us page', () => {
      // Read URL from JSON 
      cy.visit(data.indexPageURL)
      // Find parent class and then find "contact us" element within that and click
      cy.visitContactUsURL()
    })
  })
  