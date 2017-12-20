import React from "react";
import tmdbLogo from "./powered-by-tmdb.svg";
import { Header, Footer, Logo } from "./styles";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div>
      <Header>
        <h1 className="App-title">Welcome to Movie-lists</h1>
        <SearchBar />
      </Header>
      <Footer>Created by Pedro Pablo Miron Pozo</Footer>
      <Logo src={tmdbLogo} alt="logo" />
    </div>
  );
};

export default Home;
