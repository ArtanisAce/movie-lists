import styled from "styled-components";

/*
 Home page
*/

export const Main = styled.div`text-align: center;`;

export const Logo = styled.img`
  float: right;
  height: 48px;
  margin-right: 16px;
`;

export const Footer = styled.footer`
  float: left;
  font-weight: bold;
  color: darkgray;
`;

/*
 Lists components 
*/

export const List = styled.ul`
	list-style-type: none;
`;

export const MovieBox = styled.li`
	border: 1px solid black;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

/*
 List items
*/

export const MoviePoster = styled.img`display: inline-block;`;

