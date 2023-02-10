describe('Kimai Tests', () => {
    it('Test login page', () => {
        cy
            .visit(Cypress.env('kimai_base_url'))
            .get('div.login-logo')
            .contains('Kimai')
    })
})
