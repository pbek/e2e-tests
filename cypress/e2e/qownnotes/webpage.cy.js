describe("Webpage Tests", () => {
  it("Test frontpage and overview page", () => {
    cy.visit(Cypress.env("qownnotes_webpage_base_url"))
      .get("header .description")
      .contains("Free open source plain-text file markdown note-taking")

      .get("header a.action-button")
      .click()

      .get("main h2#features")
      .contains("Features");
  });

  it("Test legacy docs.qownnotes.org redirect", () => {
    cy.visit("https://docs.qownnotes.org/")
      .location("host")
      .should("eq", "www.qownnotes.org");
  });
});
