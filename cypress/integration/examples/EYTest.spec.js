/// <reference types = "cypress" />

describe('Execute automation homepage',()=>{

    it('It should launch execute automation homepage',()=>{

        cy.visit("http://www.executeautomation.com/site/")
        cy.get("input[type='text'][placeholder*='learning']").type("Cypress")
        
    })
})