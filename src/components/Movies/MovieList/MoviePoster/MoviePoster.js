import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const MoviePoster = ({ src, title }) => {
  return <Image src={src} alt={title} />;
}

MoviePoster.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default MoviePoster;