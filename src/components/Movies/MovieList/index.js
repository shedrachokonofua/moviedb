import { connect } from 'react-redux'
import MovieList from './MovieList';

const mapStateToProps = (state) => {
  return {
    error: state.error,
    loading: state.loadingMovies,
    movies: Object.values(state.movies).map(({ id, posterUrl, title }) => ({ id, posterUrl, title }))
  }
};

export default connect(mapStateToProps)(MovieList);