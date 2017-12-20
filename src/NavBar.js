import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationBar = styled.nav`
  background-color: red;
  position: static;
  height: 72px;
`;

class NavBar extends Component {
  render() {
    return (
      <NavigationBar>
        <Link to="/">Home</Link>
        <Link to="/movie-list">Movie List</Link>
      </NavigationBar>
    );
  }
}

export default NavBar;
