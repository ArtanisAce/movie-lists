import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationBar = styled.nav`
  background-color: red;
  position: static;
  height: 72px;
`;

const NavLink = styled(Link)`
  color: palevioletred;
	font-weight: bold;
	padding: 24px;
	border-left: 1px solid black;
	width: 150px;
`

class NavBar extends Component {
  render() {
    return (
      <NavigationBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie-list">Movie List</NavLink>
      </NavigationBar>
    );
  }
}

export default NavBar;
