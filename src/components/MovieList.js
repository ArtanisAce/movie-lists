import React from "react";
import styled from "styled-components";
import MovieBox from "./MovieBox";

export const List = styled.ul`
  list-style-type: none;
`;

export default (props) => {

  return (
    <List>
      {props.films.map((movie, i) =>
        <MovieBox
          key={i}
          movie={movie}
          hideButton={props.hideButtons && props.hideButtons[movie.id]}
          {...props.movieBoxProps} />
      )}
    </List>
  )
}