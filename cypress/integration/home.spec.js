context("Home Page Load", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page and display a message", () => {
    cy.get("h1").contains("Table Search & Filter");
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
  });

  it("Click next button", () => {
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-cy=next]").click();
  });

  it("Click prev button", () => {
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-cy=next]").click();
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-cy=prev]").click();
  });

  it("Using search form", () => {
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-cy=search]").type("Rizqi Ramadhani");
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
  });

  it("Using Filter Male", () => {
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-cy=filter]").select("male");
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
  });

  it("Click Sorting Table", () => {
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-cy=name]").click();
  });

  it("Using Reset Button", () => {
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-cy=search]").type("Rizqi Ramadhani");
    cy.get("[data-cy=filter]").select("male");
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-cy=reset]").click();
    cy.intercept({
      method: "GET",
      url: "https://randomuser.me/api/**",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
  });
});
