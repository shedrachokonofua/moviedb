import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { REQUEST_MOVIES, RECEIVE_MOVIES, RECEIVE_MOVIES_REQUEST_ERROR, loadMovies } from './actions';
import fetchMock from 'fetch-mock';
import getMoviesResponse from '../fixtures/getMoviesResponse';
import reducedMovies from '../fixtures/reducedMovies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => fetchMock.restore());

  it('should dispatch RECEIVE_MOVIES when fetching movies is done', () => {
    const url = `http://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`;
    fetchMock.getOnce(url, {
      body: getMoviesResponse,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: REQUEST_MOVIES },
      { type: RECEIVE_MOVIES, movies: reducedMovies }
    ];
    const initialState = {
      error: false,
      loadingMovies: false,
      movies: {}
    }
    const store = mockStore(initialState);

    return store.dispatch(loadMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch RECEIVE_MOVIES_REQUEST_ERROR should fetching movies fail', () => {
    const url = `http://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`;
    fetchMock.getOnce(url, 500);
    const expectedActions = [
      { type: REQUEST_MOVIES },
      { type: RECEIVE_MOVIES_REQUEST_ERROR, "error": "Error loading movies." }
    ];
    const initialState = {
      error: false,
      loadingMovies: false,
      movies: {}
    }
    const store = mockStore(initialState);

    return store.dispatch(loadMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})