describe("Webpage Tests", () => {
  it("Test frontpage and overview page", () => {
    cy.visit(Cypress.env("qownnotes_webpage_base_url"))
      .get("main p")
      .contains(
        "Free open source plain-text file markdown note-taking with Nextcloud / ownCloud integration",
      )

      .get("main a")
      .contains("Quick Start")
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
