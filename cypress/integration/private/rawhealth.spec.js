describe('Rawhealth Tests', () => {
    it('Test rawhealthandhappiness.com', () => {
        cy
            .visit(Cypress.env('rawhealth_base_url'), {timeout: 10000})
            .get('.main-body-wrapper h1')
            .contains('High carbohydrate raw vegan lifestyle and recipes')
    })

    it('Test rohundfroh.eu', () => {
        cy
            .visit(Cypress.env('rohundfroh_base_url'), {timeout: 10000})
            .get('.main-body-wrapper h1')
            .contains('Vegane Rohkost - Rezepte (80-10-10) und Blog')
    })
})
