import React from 'react';
import styled from 'styled-components';
import tmdbLogo from '../svg/powered-by-tmdb.svg';
import SearchBar from './SearchBar';
import ReactSVG from 'react-svg';

const TMDBLogo = styled(ReactSVG) `
  float: right;
  height: 48px;
  margin-right: 16px;
`;

const Footer = styled.footer`
  float: left;
  font-weight: bold;
`;

const BottomPageContainer = styled.div`
  margin: 24px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

const Home = () => {

  return (
    <div>
      <SearchBar />
      <BottomPageContainer role='contentinfo'>
        <Footer>Created by Pedro Pablo Miron Pozo</Footer>
        <TMDBLogo path={tmdbLogo} />
      </BottomPageContainer>
    </div>
  );
};

export default Home;
