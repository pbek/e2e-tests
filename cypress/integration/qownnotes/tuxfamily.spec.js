describe('Tuxfamily Tests', () => {
    it('Test download page', () => {
        cy
            .visit(Cypress.env('qownnotes_tuxffamily_download_base_url'))
            .get('table')
            .contains('qownnotes-')
    })
})
