import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main } from "./styles";
import Home from "./Home";
import Movie from "./Movie";
import MovieList from "./MovieList";
import SearchResults from "./SearchResults";

const MainContent = props =>
  props.error ? (
    <div>Oops, something went wrong :(</div>
  ) : (
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchResults} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/movie-list" component={MovieList} />
      </Switch>
    </Main>
  );

const mapStateToProps = state => {
  if (state.error) {
    // GITANADA, solo es un workaround :)
    console.error(error);
  }

  return {
    error: state.error
  };
};

export default connect(mapStateToProps, null)(MainContent);
