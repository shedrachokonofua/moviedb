import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:1234';

Given('Movies have been loaded', () => {
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

When('I click on a movie poster', () => {
  cy.get('[data-cy="MoviePoster"]').first().click()
})

Then(`I should be redirected to the movie's page`, () => {
  cy.url().should('include', '/movie/');
});
