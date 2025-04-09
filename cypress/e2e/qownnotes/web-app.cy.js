describe("Web App Tests", () => {
  it("Test frontpage and overview page", () => {
    cy.visit(Cypress.env("qownnotes_web_app_url"))
      .get("body")
      .contains(" Send images to your QOwnNotes desktop application.");
  });
});
