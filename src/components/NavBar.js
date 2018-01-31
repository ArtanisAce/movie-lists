import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationBar = styled.nav`
  background-color: lightblue;
  position: static;
  padding: 24px;
`;

const Title = styled.h1`
  padding: 24px;
  flex: 3;
  color: white;
`;

const NavLink = styled(Link) `
  color: palevioletred;
  font-weight: bold;
  margin: 0 24px;
  text-align: center;
`

const LinkWrapper = styled.li`
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
`;

class NavBar extends Component {
  render() {
    return (
      <NavigationBar>
        <Title>MovieLists</Title>
        <NavList>
          <LinkWrapper>
            <NavLink to="/">Home</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to="/movie-list">Movie List</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to="/login">Login</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to="/logout">Logout</NavLink>
          </LinkWrapper>
        </NavList>
      </NavigationBar>
    );
  }
}

export default NavBar;
