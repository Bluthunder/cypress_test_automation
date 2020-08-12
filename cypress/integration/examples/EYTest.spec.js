/// <reference types = "cypress" />

const { Homepage } = require("../../page-objects/homepage")

describe('Execute automation homepage',()=>{

    const homepage = new Homepage

    beforeEach(()=>{
        homepage.navigate()
    })


    it('It should launch execute automation homepage',()=>{
        
        cy.get("input[type='text'][placeholder*='learning']").type("Cypress").click
        
    })
})