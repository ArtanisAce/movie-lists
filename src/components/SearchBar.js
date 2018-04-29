import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { searchFilm } from "../actions/index";
import { Redirect } from "react-router-dom";
import { SubmitButton } from "../styles";

const SearchForm = styled.div`
  display: flex;
  position: relative;
  margin: 5em auto;
  width: 35%;
  flex-direction: row;
  box-shadow: 1px 1px 0 ${props => props.theme.boxShadowColor},
    2px 2px 0 ${props => props.theme.boxShadowColor},
    3px 3px 0 ${props => props.theme.boxShadowColor},
    4px 4px 0 ${props => props.theme.boxShadowColor},
    5px 5px 0 ${props => props.theme.boxShadowColor},
    6px 6px 0 ${props => props.theme.boxShadowColor},
    7px 7px 0 ${props => props.theme.boxShadowColor};
  input,
  button {
    font-family: "Sanchez", Arial, serif;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.6em;
  border: 1px solid ${props => props.theme.mainColor};
`;

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { movieToSearch: "", search: false };
    this.onInputChange = this.onInputChange.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  onInputChange(e) {
    this.setState({ movieToSearch: e.target.value });
  }

  searchMovie(e) {
    e.preventDefault();
    this.setState({ search: true });
    this.props.searchFilm(this.state.movieToSearch);
  }

  render() {
    if (this.state.search) {
      return <Redirect to="/search-results" />;
    }

    return (
      <form role="search" onSubmit={this.searchMovie}>
        <SearchForm>
          <SearchInput
            type="search"
            placeholder="Search for a movie..."
            onChange={this.onInputChange}
            value={this.state.movieToSearch}
          />
          <SubmitButton type="submit" disabled={!this.state.movieToSearch}>
            Find!
          </SubmitButton>
        </SearchForm>
      </form>
    );
  }
}

export default connect(null, { searchFilm })(SearchBar);
