import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import arnieLogo from '../svg/arnold-schwarzenegger.svg';

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  background-color: ${props => props.theme.mainColor};
  position: static;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h1`
  color: white;
  margin-left: 24px;
  display: inline-block;
  font-family: 'Raleway Thin', 'Times New Roman', serif;
`;

const ArnieLogo = styled(ReactSVG)`
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
  color: lightgray;
  font-weight: bold;
  font-size: 19px; /* To ensure enough contrast */
  margin: 0 24px;
  text-align: center;
  text-decoration: none;
  transition: border-bottom ease-in-out 0.25s;
  &:focus {
    color: orangered;
  }
  &:hover {
    border-bottom: 1px solid orangered;
  }
`;

const NavBar = (props) => {
  return (
    <NavigationBar role='navigation'>
      <LogoContainer>
        <Title role='banner'>Movie Lists</Title>
        <ArnieLogo path={arnieLogo} />
      </LogoContainer>
      <LinkContainer>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/movie-list'>MOVIE LIST</NavLink>
        <NavLink to='/create-user'>SIGNUP</NavLink>
        <NavLink to='/logout'>LOGOUT</NavLink>
      </LinkContainer>
    </NavigationBar>
  );

}

export default NavBar;
