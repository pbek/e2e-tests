describe('Kimai Tests', () => {
    it('Test login page', () => {
        cy
            .visit(Cypress.env('kimai_base_url'))
            .get('body')
            .then((body) => {
                if (body.find('div.login-logo').length) {
                    cy.log('Kimai 1 found')
                    cy.contains('Kimai')
                } else if (body.find('div.text-center > h1 > img').length) {
                    cy.log('Kimai 2 found')
                    cy.invoke('attr', 'alt').should('contain', 'Kimai')
                }
            })
    })
})
