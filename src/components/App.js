import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getConfig } from "../actions/index";
import styledSanitize from "styled-sanitize";
import { injectGlobal, ThemeProvider } from "styled-components";
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

  main {
    text-align: center;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Sanchez', Arial, serif;
    transition: all ease-in-out 0.5s;
  }
`;

class App extends Component {
  componentDidMount() {
    this.props.getConfig();
  }

  render() {
    const location = this.props.location.pathname;

    const theme = {
      mainColor: "#CC0000",
      secondaryColor: "#F5F5DC",
      boxShadowColor: "lightgray",
      hoverButtonColor: "#660000",
      disabledButton: "darkgray",
      lowMargin: "16px"
    };

    return (
      <ThemeProvider theme={theme}>
        <div>
          <NavBar location={location} />
          <MainContent />
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(connect(null, { getConfig })(App));
