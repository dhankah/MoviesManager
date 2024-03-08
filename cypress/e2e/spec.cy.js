describe('Counter test', () => {
  it('Increments and decrements counter value', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="increment-btn"]').click();
    cy.get('p').should('contain', 'Count: 1');
    cy.get('[data-testid="decrement-btn"]').click();
    cy.get('p').should('contain', 'Count: 0');
  })

})