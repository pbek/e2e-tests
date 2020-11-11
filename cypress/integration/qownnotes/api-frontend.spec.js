describe('API Frontend Tests', () => {
    it('Test fetching of latest release', () => {
        cy.visit(Cypress.env('qownnotes_api_base_url'), {headers: {accept: 'text/html'}})

        // Click on "LatestRelease collection"
        cy
            .get('#operations-LatestRelease-getLatestReleaseItem > div.opblock-summary.opblock-summary-get > span.opblock-summary-path > a > span')
            .click()

        // Click on "Try it out"
        cy
            .get('#operations-LatestRelease-getLatestReleaseItem button.try-out__btn')
            .click()

        // Click on "Execute"
        cy
            .get('#operations-LatestRelease-getLatestReleaseItem button.execute')
            .click({force: true})   // even click the button if it is covered

        // Look for the download link
        cy
            .get('#operations-LatestRelease-getLatestReleaseItem')
            .contains('https://github.com/pbek/QOwnNotes/releases/download')
    })
})
