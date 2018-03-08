import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { searchFilm } from '../actions/index';
import { Redirect } from 'react-router-dom';

const SearchForm = styled.div`
  display: flex;
  position: relative;
  margin: 5em auto;
  width:35%;
  flex-direction: row;
  box-shadow:
   1px 1px 0 ${props => props.theme.boxShadowColor},
   2px 2px 0 ${props => props.theme.boxShadowColor},
   3px 3px 0 ${props => props.theme.boxShadowColor},
   4px 4px 0 ${props => props.theme.boxShadowColor},
   5px 5px 0 ${props => props.theme.boxShadowColor},
   6px 6px 0 ${props => props.theme.boxShadowColor},
   7px 7px 0 ${props => props.theme.boxShadowColor}
  ;
  input, button {
    font-family: 'Sanchez', Arial, serif;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.6em;
  border: 1px solid ${props => props.theme.mainColor};
`;

const SearchButton = styled.button`
  padding: 0.6em 0.8em;
  background-color: ${props => props.disabled ?
    props.theme.disabledButton : props.theme.mainColor};
  color: white;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    background: ${props =>
    props.disabled ? props.theme.disabledButton : props.theme.hoverButtonColor};
  }
`;


class SearchBar extends Component {
  constructor() {
    super();
    this.state = { keyWord: '', search: false };
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
      return <Redirect to='/search' />;
    }

    return (
      <form role='search' onSubmit={this.searchKeyword}>
        <SearchForm>
          <SearchInput
            type='search'
            placeholder='Search for a movie...'
            onChange={this.onInputChange}
            value={this.state.keyWord} />
          <SearchButton type='submit' disabled={!this.state.keyWord}>
            Find!
          </SearchButton>
        </SearchForm>
      </form>
    );
  }
}

export default connect(null, { searchFilm })(SearchBar);
