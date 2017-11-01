import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchFilm } from "./actions/index";

/*
	This component is not necessary to split between container and presentational component, due to its simplicity
*/

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { keyWord: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  onInputChange(e) {
    this.setState({ keyWord: e.target.value });
  }

  searchKeyword(e) {
    e.preventDefault();
    this.props.searchFilm(this.state.keyWord);
  }

  render() {
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
