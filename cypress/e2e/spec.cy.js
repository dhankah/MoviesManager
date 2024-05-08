describe('Routing tests', () => {

it('Displays a list of movies', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="movieList"]')
        .find('[data-testid="movie-tile"]')
        .should('have.length', 10);
    });


it('Search should render results and reflect in url', () => {
    cy.visit('http://localhost:3000/');
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
  cy.visit('http://localhost:3000/');
  cy.get('[data-testid="select"]').select(1);
  cy.get('[data-testid="movieList"]')
    .find('[data-testid="movie-tile"]')
    .contains('The Gold Rush');
  cy.url().should('include', 'sortBy=release_date');
});


it('Filter by genres should work and be reflected in url', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-testid="genreOption"]')
  .contains('Documentary').click(); 
  cy.get('[data-testid="movieList"]')
    .find('[data-testid="movie-tile"]')    
    .contains('Documentary');
  cy.url().should('include', 'genre=Documentary');
});

it('All parameters should be reflected in url', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-testid="searchField"]').type('Star Wars');
  cy.get('.searchBtn').click();
  cy.get('[data-testid="select"]').select(1);
  cy.get('[data-testid="genreOption"]')
  .contains('All').click(); 
  cy.url().should('include', '?searchQuery=Star+Wars&sortBy=release_date&genre=All');
});

it('Should navigate to a movie tile and display movie id and search params in url', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-testid="searchField"]').type('Star Wars');
  cy.get('.searchBtn').click();
  cy.get('[data-testid="select"]').select(1);
  cy.get('[data-testid="movieList"]')
      .find('[data-testid="movie-tile"]');
  cy.get('[data-testid="movieList"]')
      .find('[data-testid="movie-tile"]')
      .contains('Star Wars: Episode III - Revenge of the Sith')
      .click();
  cy.get('.detailsContainer')
    .contains('Science Fiction, Adventure, Action');

  cy.url().should('include', '1895?searchQuery=Star+Wars&sortBy=release_date&genre=All');
});


})