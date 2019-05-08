import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:1234';

Given(`Movie loading fails`, () => {
  cy.server();
  cy.route({
    method: 'GET',
    url: '/3/movie/top_rated?api_key=**',
    status: 401,
    response: {}
  });
  cy.visit(url, {
    onBeforeLoad: (win) => {
      win.fetch = null
    }
  });
});

Then('I should see error message', () => {
  cy.contains('Error loading movies.');
});

Given(`Movie loading succeeds`, () => {
  cy.server();
  cy.route({
    method: 'GET',
    url: '/3/movie/top_rated?api_key=**',
    status: 200,
    response: 'fixture:movies.json'
  });
  cy.visit(url, {
    onBeforeLoad: (win) => {
      win.fetch = null
    }
  });
});

Then('I should see list of movies', () => {
  cy.get('[data-cy="MoviePoster"]').should('have.length.to.be.greaterThan', 0);
});
