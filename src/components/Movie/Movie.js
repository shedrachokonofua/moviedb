import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header/';
import MoviePoster from '../Movies/MovieList/MoviePoster/';

const Title = styled.div`
  box-sizing: border-box;
  background: #009688;
  font-size: 32px;
  padding: 20px;
  color: #ffffff;
  font-weight: light;
`;

const PageContent = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;

const MovieDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  font-size: 24px;
  margin-bottom: 15px;
`;

const MarkAsFav = styled.button`
  background: #86e4db;
  border: solid 1px #6fcac2;
  width: 112px;
  padding: 10px 20px;
  color: #757373;
  text-align: center;
`;

const Movie = ({ data }) => {
  const {
    title,
    posterUrl,
    overview,
    rating,
    releaseYear,
    length
  } = data;
  return (
    <div>
      <Header withBack title='Movie Detail'/>
      <Title>{title}</Title>
      <PageContent>
        <MovieDetails>
          <div>
            <MoviePoster src={posterUrl} title={title}/>
          </div>
          <div>
            <p>{releaseYear}</p>
            <p><i>{length} min</i></p>
            <p style={{fontSize: '16px'}}>{rating}/10</p>
            <MarkAsFav>MARK AS FAVORITE</MarkAsFav>
          </div>
        </MovieDetails>
        <div>
          { overview }
        </div>
      </PageContent>
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    releaseYear: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired
  }).isRequired
};

export default Movie;