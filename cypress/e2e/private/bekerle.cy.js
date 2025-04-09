describe("Bekerle.com Tests", () => {
  it("Test frontpage", () => {
    cy.visit(Cypress.env("bekerle_base_url"))
      .get("div.header-title")
      .contains("Patrizio Bekerle");
  });
});
