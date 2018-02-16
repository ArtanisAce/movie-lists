import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { searchFilm } from "../actions/index";
import { Redirect } from "react-router-dom";

const SearchForm = styled.div`
  display: flex;
  position: relative;
  margin: 5em auto;
  width: 70%;
  flex-direction: row;
  box-shadow:
   1px 1px 0 lightgray,
   2px 2px 0 lightgray,
   3px 3px 0 lightgray,
   4px 4px 0 lightgray,
   5px 5px 0 lightgray,
   6px 6px 0 lightgray,
   7px 7px 0 lightgray
  ;

  input, button { /*Need a selector with bigger score to override browser default*/
    font-family: 'Sanchez', Arial, serif;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.6em;
  border: 1px solid lightblue;
`;

const SearchButton = styled.button`
  padding: 0.6em 0.8em;
  background-color: ${props => props.disabled ? 'darkgray' : 'lightblue'};
  color: white;
  border: none;
`;


class SearchBar extends Component {
  constructor() {
    super();
    this.state = { keyWord: "", search: false };
    this.onInputChange = this.onInputChange.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  onInputChange(e) {
    this.setState({ keyWord: e.target.value });
  }

  searchKeyword(e) {
    e.preventDefault();
    this.setState({ search: true });
    this.props.searchFilm(this.state.keyWord);
  }

  render() {
    if (this.state.search) {
      return <Redirect to="/search" />;
    }

    return (
      <form onSubmit={this.searchKeyword}>
        <SearchForm>
          <SearchInput
            type="search"
            placeholder="Search for a movie..."
            onChange={this.onInputChange}
            value={this.state.keyWord} />
          <SearchButton type="submit" disabled={!this.state.keyWord}>
            Find!
          </SearchButton>
        </SearchForm>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFilm }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
