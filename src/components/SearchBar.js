import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchFilm } from "../actions/index";
import { Redirect } from "react-router-dom";

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
        <input
          type="search"
          placeholder="Enter a keyword..."
          onChange={this.onInputChange}
          value={this.state.keyWord}
        />
        <span>
          <button type="submit" disabled={!this.state.keyWord}>
            Search!
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFilm }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
