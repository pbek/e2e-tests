describe('Matomo Tests', () => {
    it('Test login page', () => {
        cy
            .visit('https://p.qownnotes.org')
            .get('h2.card-title')
            .contains('Sign in')
    })
})
