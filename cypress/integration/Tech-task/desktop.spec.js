/// <reference types="cypress"/>

const { access } = require("fs");
const { clearScreenDown } = require("readline");

describe("To run a cypress tech task", () => {
  before("Landing Pages", () => {
    cy.viewport(1800, 1000);
    cy.visit("https://www.zenith.co.uk/");
    cy.url().should("include", "zenith");
  });

  beforeEach("verifying icons in header", () => {
    cy.viewport(1800, 1000);

    cy.get(".header__logo-link > img").should("be.visible");

    cy.get(".header__search-btn").should("not.be.disabled");
    cy.get(".header__search-btn").should("not.be.hidden");

    cy.get(".header__contact").should("not.be.hidden");
    cy.get(".header__contact").should("not.be.disabled");

    cy.get(".nav-account").should("not.be.hidden");
    cy.get(".nav-account").should("not.be.disabled");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Verifying Who we are", () => {
    cy.get(".menu-item-8820 > .js-toggle-sub-nav").click();

    cy.get(
      ".menu-item-8820 > .nav__sub > .wrap > .content-wrap-nav > .grid > .grid__item--span-4 > .card > .card__image-background"
    ).should("be.visible");
  });

  it("veryfing personal info", () => {
    cy.get(".menu-item-158 > :nth-child(1)").click();

    cy.get(
      ".menu-item-158 > .nav__sub > .wrap > .content-wrap-nav > .grid > .grid__item--span-4 > .card > .card__image-background"
    ).should("be.visible");

    cy.get(
      ".menu-item-158 > .nav__sub > .wrap > .content-wrap-nav > .grid > .grid__item--span-4 > .card > .card__content > .link"
    )
      .trigger("mouseover", access)
      .should("be.visible");

    cy.get(
      ".menu-item-158 > .nav__sub > .wrap > .content-wrap-nav > .grid > :nth-child(3) > :nth-child(1) > .nav__sub-item"
    ).should("be.visible");

    cy.get(
      ".menu-item-158 > .nav__sub > .wrap > .content-wrap-nav > .grid > :nth-child(1)"
    ).should("be.visible");

    cy.get(
      "#head-nav > div > ul > li.nav__item.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-158.menu-item-has-children.is-active > div > div > div > div.grid.grid--1-12--ng--from-xLarge > div:nth-child(1) > div > a"
    ).should("be.visible");
  });

  afterEach("Verify footer", () => {
    cy.get(".cookie-banner > .wrap > .content-wrap").should("be.visible");

    cy.get("body > section > div > div > a").should("be.visible");
    cy.get("body > section > div > div > a").should("not.be.disabled");
  });
});
