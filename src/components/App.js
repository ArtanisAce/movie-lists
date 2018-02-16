import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getConfig } from "../actions/index";
import styledSanitize from 'styled-sanitize'
import { injectGlobal } from "styled-components";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

injectGlobal`

  ${styledSanitize} /*Reset CSS*/

  @font-face {
    font-family: 'Raleway Thin';
    src: url('/fonts/raleway_thin-webfont.eot');
    src: url('/fonts/raleway_thin-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/raleway_thin-webfont.woff') format('woff'),
         url('/fonts/raleway_thin-webfont.ttf') format('truetype'),
         url('/fonts/raleway_thin-webfont.svg#Raleway-Thin') format('svg');
    font-weight: normal;
    font-style: normal;
  }
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
