import { connect } from 'react-redux';
import Movie from './Movie';

const mapStateToProps = (state, { match: { params } }) => {
  return {
    data: state.movies[params.id]
  }
}

export default connect(mapStateToProps)(Movie);