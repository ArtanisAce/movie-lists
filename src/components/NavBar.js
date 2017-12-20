import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationBar = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
  background-color: red;
  position: static;
  height: 72px;
	padding: 24px;
`;

const NavLink = styled(Link)`
  color: palevioletred;
	font-weight: bold;
	flex: 1;
	text-align: right;
`

class NavBar extends Component {
  render() {
    return (
      <NavigationBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie-list">Movie List</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </NavigationBar>
    );
  }
}

export default NavBar;
