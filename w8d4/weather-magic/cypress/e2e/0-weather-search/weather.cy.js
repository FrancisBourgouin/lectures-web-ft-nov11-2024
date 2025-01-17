/// <reference types="cypress" />


describe("Basic Weather App Usage", () => {

  beforeEach(() => {
    cy.visit("/")
  })

  it("should load the appropriate elements", () => {
    // - On page load, current weather should be hidden
    // - On page load, we should the form

    cy.get(".Header").should("exist")

    cy.get(".CurrentWeather").should("not.exist")
  })

  it("should load the weather once we search for a valid city", () => {
    // - If we type a valid city and search
    // - Then we should see the weather component
    cy.get(".CityForm input").type("Montréal")

    cy.get(".CityForm button").click()

    cy.get(".CurrentWeather").should("exist")

    cy.contains("Weather for Montréal").should("exist")
  })

  it("should add the searched city as part of the history", () => {
    // - Also we should a button for the searched city
    cy.get(".CityForm input").type("Montréal")

    cy.get(".CityForm button").click()

    cy.get(".SearchHistory ul li").should("have.length", 1)
  })

  it("should add the searched city once as part of the history", () => {
    // - Also we should a button for the searched city
    cy.get(".CityForm input").type("Montréal")

    cy.get(".CityForm button").click()

    cy.get(".CityForm input").type("Montréal")

    cy.get(".CityForm button").click()

    cy.get(".SearchHistory ul li").should("have.length", 1)
  })
})

describe("Erroneous Weather App Usage", () => {
  it("should not show current weather info if the city is invalid", () => {
    cy.visit("/")

    cy.get(".CityForm input").type("CITY NAME INVALID")

    cy.get(".CityForm button").click()

    cy.get(".CurrentWeather").should("not.exist")

    cy.contains("Weather for").should("not.exist")
  })
})