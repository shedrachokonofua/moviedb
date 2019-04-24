import { connect } from 'react-redux'
import Movies from './Movies';
import { loadMovies } from '../../actions/';

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: () => dispatch(loadMovies())
  }
}

export default connect(null, mapDispatchToProps)(Movies);