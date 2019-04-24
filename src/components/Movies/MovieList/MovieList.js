import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoviePoster from './MoviePoster/MoviePoster';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const MovieList = ({ error, loading, movies }) => {
  if(error) return <p>{ error }</p>;
  if(loading) return <p>Loading...</p>;

  return (
    <Wrapper>
      { movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MoviePoster src={movie.posterUrl} title={movie.title}/>
        </Link>      
      )) }
    </Wrapper>
  );
}

MovieList.propTypes = {
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    posterUrl: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired
  }))
};

MovieList.defaultProps = {
  loading: false,
};

export default MovieList;