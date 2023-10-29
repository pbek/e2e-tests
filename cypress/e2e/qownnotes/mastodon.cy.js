describe('Mastodon Tests', () => {
    it('Test Mastodon JSON API', () => {
        cy.request({
            method: 'GET',
            url: 'https://social.qownnotes.org/api/v1/instance',
        }).as('response');

        cy.get('@response').should((response) => {
            expect(response.status).to.eq(200); // Check the HTTP status code
            expect(response.body).to.have.property('uri'); // Check if uri property exists
            expect(response.body.uri).to.eq('social.qownnotes.org'); // Check the property value
            expect(response.body).to.have.property('title'); // Check if title property exists
            expect(response.body.title).to.eq('QOwnNotes Mastodon'); // Check the property value
        });
    })

    /**
     * We have issues testing those on GitHub Actions
     */

    // it('Test Mastodon QOwnNotes page', () => {
    //     cy
    //         .visit(Cypress.env('qownnotes_mastodon_base_url'))
    //         .visit(Cypress.env('qownnotes_mastodon_base_url') + '/@qownnotes')
    //         .get('body')
    //         .contains('QOwnNotes')
    // })
    //
    // it('Test Mastodon Patrizio page', () => {
    //     cy
    //         .visit(Cypress.env('qownnotes_mastodon_base_url'))
    //         .visit(Cypress.env('qownnotes_mastodon_base_url') + '/@patrizio')
    //         .get('body')
    //         .contains('Patrizio Bekerle')
    // })
})
