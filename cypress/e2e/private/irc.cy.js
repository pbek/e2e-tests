describe('IRC Tests', () => {
    it('Test login page', () => {
        cy
            .visit(Cypress.env('irc_base_url'))
            .get('form button.btn')
            .contains('Sign in')
    })
})
