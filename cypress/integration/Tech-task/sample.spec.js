/// <reference types="cypress"/>

const { clearScreenDown } = require("readline");


describe('To run a cypress tech task',() => {

    before('Landing Pages',()=>{

        cy.visit('https://www.zenith.co.uk/');
        cy.url().should('include','zenith');

        
    })

    beforeEach('verifying icons in header',()=>{

        
        cy.get('.header__search-btn').should('not.be.disabled');
        cy.get('.header__search-btn').should('not.be.hidden');

        cy.get('.header__contact').should('not.be.hidden');
        cy.get('.header__contact').should('not.be.disabled');

        cy.get('.nav-account').should('not.be.hidden');
        cy.get('.nav-account').should('not.be.disabled');


    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
      // failing the test
        return false
    }) 

    it('Verifying Who we are', ()=>{

        cy.get('.nav-activator').click();

        cy.get('.menu-item-8820 > .js-toggle-sub-nav').click();
        cy.get('.menu-item-8820 > .js-toggle-sub-nav > .nav__link-icon').should('be.visible');
        
        cy.get('.menu-item-8820 > .js-toggle-sub-nav > .nav__link-icon').trigger('click');
               

    })

    it('veryfing personal info', ()=>{

        cy.get('.menu-item-158 > :nth-child(1)').click();
        //cy.get('.menu-item-158 > :nth-child(1)').trigger('click');

        cy.get('.menu-item-158 > .nav__sub > .wrap > .content-wrap-nav > .grid > :nth-child(1) > .nav__sub-description').should('be.visible');

        cy.get('.menu-item-158 > .nav__sub > .wrap > .content-wrap-nav > .grid > :nth-child(1) > .nav__sub-description').should('be.visible');
        cy.get('.menu-item-158 > .nav__sub > .wrap > .content-wrap-nav > .grid > :nth-child(1) > .nav__sub-description').should('be.contain.text','personal');

        cy.get('.menu-item-158 > .nav__sub > .wrap > .content-wrap-nav > .grid > :nth-child(1) > .nav__sub-description').invoke('text').should('include','personal');
    })


})