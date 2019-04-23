import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #212121;
  padding: 20px 10px;
  font-size: 24px;
`;

const BackButtonWrapper = styled.div`
  float: left;
  margin-right: 15px;
`;

const Title = styled.span`
  float: left;
  color: white;
  font-weight: bold;
`;

const BackButton = (
  <BackButtonWrapper>
    <Link to='/'>
      <FontAwesomeIcon icon={faArrowLeft} color='#fff'/>
    </Link>
  </BackButtonWrapper>
)

const Header = ({ title, withBack }) => {
  return (
    <Wrapper>
      { withBack && BackButton }
      <Title>{title}</Title>
    </Wrapper>
  );
}

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  withBack: PropTypes.bool.isRequired
}

export default Header;