import React from "react";
import tmdbLogo from "../powered-by-tmdb.svg";
import { Footer, Logo } from "../styles";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div>
			<h2>Search for a movie!</h2>
			<SearchBar />
      <Footer>Created by Pedro Pablo Miron Pozo</Footer>
      <Logo src={tmdbLogo} alt="logo" />
    </div>
  );
};

export default Home;
