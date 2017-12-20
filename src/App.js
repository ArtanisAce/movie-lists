import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getConfig } from "./actions/index";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

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
