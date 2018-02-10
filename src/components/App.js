import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getConfig } from "../actions/index";
import { injectGlobal } from "styled-components";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

injectGlobal`
  /* Apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Sanchez', Arial, serif;
  }
`;

class App extends Component {
  componentWillMount() {
    this.props.getConfig();
  }

  render() {
    return (
      <div>
        <NavBar />
        <MainContent />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getConfig }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
