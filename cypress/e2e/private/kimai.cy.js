describe('Kimai Tests', () => {
    it('Test login page', () => {
        cy
            .visit(Cypress.env('kimai_base_url'))
            .get('div.text-center > h1 > img')
            .invoke('attr', 'alt')
            .should('contain', 'Kimai')
    })
})
