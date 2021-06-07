describe('Creating a message', () => {
  it('Affiche le message dans une liste', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="messageText"]').type('New message')

    cy.get('[data-testid="sendButton"]').click()

    cy.get('[data-testid="messageText"]').should('have.value', '')

    cy.contains('New message')
  })
})
