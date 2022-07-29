describe('Cloud Tests', () => {
    it('Test frontpage and overview page', () => {
        cy
            .visit(Cypress.env('cloud_base_url'))
            .get('footer a.entity-name')
            .contains('Nextcloud Bekerle')

            .get('main #submit-form')
            .should('have.value', 'Log in')
    })
})
