import React from "react";
import styled from "styled-components";
import tmdbLogo from "../svg/powered-by-tmdb.svg";
import SearchBar from "./SearchBar";
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
      <BottomPageContainer role="contentinfo">
        <Footer>Created by Pedro Pablo Miron Pozo</Footer>
        <TMDBLogo path={tmdbLogo} />
        <div>Icons made by
        <a href="https://www.flaticon.com/authors/business-dubai" title="Business Dubai">Business Dubai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
      </BottomPageContainer>
    </div>
  );
};

export default Home;
