describe('Routing tests', () => {

  it('Displays a list of movies', () => {
      cy.visit('http://localhost:3000');
      cy.get('[data-testid="movieList"]')
          .find('[data-testid="movie-tile"]')
          .should('have.length', 10);
    });



it('Search should render results and reflect in url', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="searchField"]').type('Star Wars');
    cy.get('.searchBtn').click();
    cy.get('[data-testid="movieList"]')
    .find('[data-testid="movie-tile"]');
    cy.get('[data-testid="movieList"]')
    .find('[data-testid="movie-tile"]')
    .contains('Star Wars: Episode III - Revenge of the Sith');
    cy.url().should('include', '/?searchQuery=Star+Wars');

});

it('Sort should work and be reflected in url', () => {
  cy.visit('http://localhost:3000/')
  cy.get('[data-testid="select"]').select(1);
  cy.get('[data-testid="movieList"]')
    .find('[data-testid="movie-tile"]')
    .contains('The Gold Rush');
    cy.url().should('include', 'sortBy=release_date');
});



})