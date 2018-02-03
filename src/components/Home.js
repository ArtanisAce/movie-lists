import React from "react";
import tmdbLogo from "../svg/powered-by-tmdb.svg";
import { Footer, TMDBLogo } from "../styles";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div>
      <h2>Search for a movie!</h2>
      <SearchBar />
      <Footer>Created by Pedro Pablo Miron Pozo</Footer>
      <TMDBLogo src={tmdbLogo} alt="tmdb_logo" />
      <div>Icons made by <a href="https://www.flaticon.com/authors/business-dubai" title="Business Dubai">Business Dubai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
    </div>
  );
};

export default Home;
