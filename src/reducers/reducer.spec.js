import reducer from './reducer';
import { RECEIVE_MOVIES, REQUEST_MOVIES, RECEIVE_MOVIES_REQUEST_ERROR } from '../actions';

describe('Reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      error: false,
      loadingMovies: false,
      movies: {}
    });
  });

  it('should handle REQUEST_MOVIES', () => {
    const action = { type: REQUEST_MOVIES };
    expect(reducer({}, action)).toEqual({ loadingMovies: true });
  });

  it('should handle RECEIVE_MOVIES_REQUEST_ERROR', () => {
    const action = { type: RECEIVE_MOVIES_REQUEST_ERROR, error: 'error' };
    expect(reducer({}, action)).toEqual({ loadingMovies: false, error: 'error' });
  });

  it('should handle RECEIVE_MOVIES', () => {
    const action = { type: RECEIVE_MOVIES, movies: {} };
    expect(reducer({}, action)).toEqual({ loadingMovies: false, movies: {}, error: false });
  });
})