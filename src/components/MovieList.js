import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieBox from "./MovieBox";

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const MovieList = (props) => {

  return (
    <List>
      {props.films.map((movie, i) =>
        <MovieBox
          keyIndex={i}
          movie={movie}
          hideButton={props.hideButtons && props.hideButtons[movie.id]}
          {...props.movieBoxProps} />
      )}
    </List>
  )
}

export default MovieList;

MovieList.Proptypes = {
  films: PropTypes.array.isRequired,
  movieBoxProps: PropTypes.object.isRequired
}
