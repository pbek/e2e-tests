    describe('API Frontend Tests', () => {
    it('Test fetching of latest release', () => {
        cy.visit(Cypress.env('qownnotes_api_base_url'), {headers: {accept: 'text/html'}})

        // Click on "LatestRelease collection"
        cy
            .get('#operations-LatestRelease-api_latest_releases_get_collection > div:nth-child(1) > button:nth-child(3)')
            .click()

        // Click on "Try it out"
        cy
            .get('  button.btn.try-out__btn')
            .click()

        // Click on "Execute"
        cy
            .get('.execute-wrapper button.execute.opblock-control__btn')
            .click({force: true})   // even click the button if it is covered

        // Look for the download link
        cy
            .get('pre.microlight:nth-child(3)')
            .contains('https://github.com/pbek/QOwnNotes/releases/download', {timeout: 10000})
    })

    it('Test legacy release api', () => {
        cy.request('https://www.qownnotes.org/api/v1/last_release/QOwnNotes/windows.json?debug=1')
        .then((response) => {
            expect(response.body).to.have.property('should_update', true)
            expect(response.body).to.have.property('release')
        })

        cy.request('https://www.qownnotes.org/api/v1/last_release/QOwnNotes/macosx.json?debug=1')
        .then((response) => {
            expect(response.body).to.have.property('should_update', true)
            expect(response.body).to.have.property('release')
        })

        cy.request('https://www.qownnotes.org/api/v1/last_release/QOwnNotes/linux.json?debug=1')
        .then((response) => {
            expect(response.body).to.have.property('should_update', true)
            expect(response.body).to.have.property('release')
        })
    })
})
