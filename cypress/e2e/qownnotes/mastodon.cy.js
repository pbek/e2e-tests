describe('Web App Tests', () => {
    it('Test Mastodon QOwnNotes page', () => {
        cy
            .visit(Cypress.env('qownnotes_mastodon_base_url'))
            .visit(Cypress.env('qownnotes_mastodon_base_url') + '/@qownnotes')
            .get('body')
            .contains('QOwnNotes')
    })

    it('Test Mastodon Patrizio page', () => {
        cy
            .visit(Cypress.env('qownnotes_mastodon_base_url'))
            .visit(Cypress.env('qownnotes_mastodon_base_url') + '/@patrizio')
            .get('body')
            .contains('Patrizio Bekerle')
    })
})
