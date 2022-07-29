describe('Bekerle.com Tests', () => {
    it('Test frontpage', () => {
        cy
            .visit(Cypress.env('bekerle_base_url'))
            .get('ul.profile-data')
            .contains('Patrizio Bekerle')
    })
})
