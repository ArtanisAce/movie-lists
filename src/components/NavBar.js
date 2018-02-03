import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arnieLogo from '../svg/arnold-schwarzenegger.svg';

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  background-color: lightblue;
  position: static;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h1`
  color: white;
  margin-left: 24px;
  display: inline-block;
`;

const ArnieLogo = styled.img`
  height: 72px;
  align-self: flex-start;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const LinkContainer = styled.nav`
  display: flex;
`;

const NavLink = styled(Link) `
  color: gray;
  font-weight: bold;
  margin: 0 24px;
  text-align: center;
  text-decoration: none;
`

class NavBar extends Component {
  render() {
    return (
      <NavigationBar role="navigation">
        <LogoContainer>
          <Title>MovieLists</Title>
          <ArnieLogo src={arnieLogo} alt="aeeeeeee"/>
        </LogoContainer>
        <LinkContainer>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/movie-list">MOVIE LIST</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/logout">LOGOUT</NavLink>
        </LinkContainer>
      </NavigationBar>
    );
  }
}

export default NavBar;
