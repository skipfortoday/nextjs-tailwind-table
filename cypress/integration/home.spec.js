context("Home Page Load", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page and display a message", () => {
    cy.get("h1").contains("Table Search & Filter");
    cy.get("[data-cy=next]").click();
    cy.get("[data-cy=prev]").click();
  });

  it("Click next button", () => {
    cy.get("[data-cy=next]").click();
  });

  it("Click prev button", () => {
    cy.get("[data-cy=next]").click();
    cy.get("[data-cy=prev]").click();
  });

  it("Using search form", () => {
    cy.get("[data-cy=search]").type("Rizqi Ramadhani");
  });

  it("Using Filter Male", () => {
    cy.get("[data-cy=filter]").select("male");
  });

  it("Click Sorting Table", () => {
    cy.get("[data-cy=name]").click();
  });

  it("Using Reset Button", () => {
    cy.get("[data-cy=search]").type("Rizqi Ramadhani");
    cy.get("[data-cy=filter]").select("male");
    cy.get("[data-cy=reset]").click();
  });
});
