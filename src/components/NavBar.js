import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import arnieLogo from '../svg/arnold-schwarzenegger.svg';
import leoLogo from '../svg/leonardo-di-caprio.svg';
import filmLogo from '../svg/film.svg';
import popcornLogo from '../svg/popcorn.svg';

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

const Logo = styled(ReactSVG)`
  height: 64px;
  margin-left: 16px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
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

  let logo;
  switch(props.location) {
    case '/movie-list':
    logo = filmLogo;
    break;
    case '/create-user':
    logo = leoLogo;
    break;
    case '/search-results':
    logo = popcornLogo;
    break;
    default:
    logo = arnieLogo;
  }

  return (
    <NavigationBar role='navigation'>
      <LogoContainer>
        <Title role='banner'>Movie Lists</Title>
        <Logo path={logo} />
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
