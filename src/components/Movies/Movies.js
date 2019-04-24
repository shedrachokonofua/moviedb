import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/';
import MovieList from './MovieList/';

class Movies extends React.Component {
  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    return (
      <div>
        <Header title='Popular Movies'/>
        <MovieList/>
      </div>
    );
  }
}

Movies.propTypes = {
  loadMovies: PropTypes.func.isRequired
}

export default Movies;