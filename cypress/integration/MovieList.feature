Feature: MovieList
  Scenario: Loading Movies
    Given Movie loading fails
    Then I should see error message

    Given Movie loading succeeds
    Then I should see list of movies

  Scenario: Picking Movie
    Given Movies have been loaded
    When I click on a movie poster
    Then I should be redirected to the movie's page