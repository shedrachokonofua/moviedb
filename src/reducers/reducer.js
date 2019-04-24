import { RECEIVE_MOVIES, REQUEST_MOVIES, RECEIVE_MOVIES_REQUEST_ERROR } from '../actions';

const initialState = {
  error: false,
  loadingMovies: false,
  movies: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, state, { loadingMovies: false, movies: action.movies, error: false });
    case REQUEST_MOVIES:
      return Object.assign({}, state, { loadingMovies: true });
    case RECEIVE_MOVIES_REQUEST_ERROR:
      return Object.assign({}, state, { loadingMovies: false, error: action.error });
    default: 
      return state;
  }
}