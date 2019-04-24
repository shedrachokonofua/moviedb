export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIES_REQUEST_ERROR = 'RECEIVE_MOVIES_REQUEST_ERROR';

const requestMovies = () => ({ type: REQUEST_MOVIES });
const receiveMovies = (movies) => ({ type: RECEIVE_MOVIES, movies });
const receiveMoviesRequestError = () => ({ type: RECEIVE_MOVIES_REQUEST_ERROR, error: "Error loading movies." });

function normalizeData(data) {
  const normalized = {};
  data.forEach(movie => {
    normalized[movie.id] = {
      id: movie.id,
      title: movie.title,
      posterUrl: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
      overview: movie.overview,
      rating: movie.vote_average,
      releaseYear: movie.release_date.split('-')[0],
      length: 120
    };
  });
  return normalized;
}


export function loadMovies() {
  return function(dispatch) {
    dispatch(requestMovies());
    const url = `http://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`;
    return fetch(url)
      .then(response => response.json().then(json => ({ status: response.status, json })))
      .then(
        ({ status, json }) => {
          if(status >= 400) {
            console.log("Error loading movies.", { status });
            dispatch(receiveMoviesRequestError());
            return;
          };
          dispatch(receiveMovies(normalizeData(json.results)));

        },
        error => {
          console.log("Error loading movies.", error);
          dispatch(receiveMoviesRequestError())
        }
      )
  };
} 