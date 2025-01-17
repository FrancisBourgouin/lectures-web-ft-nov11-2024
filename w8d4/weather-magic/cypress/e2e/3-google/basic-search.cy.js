/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Google Search', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://google.com')
  })

  it("should load the google search page and have two buttons in here", () => {
    cy.get('.FPdoLc > center > .gNO89b').should("be.visible")
    cy.get('.FPdoLc > center > .RNmpXc').should("be.visible")

    cy.get('#APjFqb').type("Einstein-Rosen Bridge{enter}")

    cy.get('#AyvPbf > .g > .srKDX > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').should("have.text","Wormhole")
  })
})
