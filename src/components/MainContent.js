import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Home from "./Home";
import Movie from "./Movie";
import UserList from "./UserList";
import SearchResults from "./SearchResults";

export const Main = styled.div`text-align: center;`;

const MainContent = props =>
  props.error ? (
    <div>Oops, something went wrong :(</div>
  ) : (
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/movie-list" component={UserList} />
        </Switch>
      </Main>
    );

const mapStateToProps = state => ({
  error: state.error
});

export default withRouter(connect(mapStateToProps, null)(MainContent));
