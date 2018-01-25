import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
  background-color: red;
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

const LinkWrapper = styled.span`
`

class NavBar extends Component {
	render() {
		return (
			<NavigationBar>
				<Title>MovieLists</Title>
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
			</NavigationBar>
		);
	}
}

export default NavBar;
