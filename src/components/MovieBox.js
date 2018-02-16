import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../styles";

export const BoxContainer = styled.li`
  margin: 32px;
  padding: 24px;
  border: 1px solid ${props => props.theme.mainColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 1s;
  align-self: center;
  width: 70%;
  /* on smaller screens, eliminate width limit*/
`;

export const MoviePoster = styled.img`
  display: inline-block;
  max-width: 100%;
`;

const MovieHeader = styled.div`
  width: 50%;
`;

const Title = styled(Link) `
  display: block;
  font-weight: bold;
`;

const AddMovieBtn = styled.button`
  display:  ${props => props.hideButton ? 'none' : 'block'};
  margin-right: 24px;
  width: 48px;
  height: 48px;
  line-height: 45px;
  border: 2px solid white;
  border-radius: 50%;
  color: ${props => props.theme.secondaryColor};
  text-align: center;
  text-decoration: none;
  background: ${props => props.theme.mainColor};
  box-shadow: 0 0 3px ${props => props.theme.boxShadowColor};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.hoverButtonColor};
  }
`;

const Plot = styled.p`
  font-style: italic;
  font-size: 12px;
`;

const MovieBox = (props) => {

  const overview = props.movie.overview.slice(0, 300);

  return (
    <BoxContainer key={props.keyIndex}>
      <MovieHeader>
        <Title to={`/movie/${props.movie.id}`}>
          {`${props.movie.title} (${props.movie.release_date.slice(0, 4)})`}
        </Title>
        <Plot>
          {overview ? `${overview}...` : `No overview available!`}
        </Plot>
      </MovieHeader>
      <MoviePoster
        src={`${props.tmdbConfiguration.images.base_url}/${props.tmdbConfiguration
          .images.poster_sizes[0]}${props.movie.poster_path}`}
        alt={`${props.movie.title} poster`}
      />
      {props.addMovieButton &&
        <AddMovieBtn hideButton={props.hideButton} onClick={() => props.addMovie(props.movie.id)}>
          +
      </AddMovieBtn>}
    </BoxContainer>
  )
};

export default MovieBox;

MovieBox.defaultProps = {
  hideButton: false
}

MovieBox.propTypes = {
  key: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
  hideButton: PropTypes.boolean,
  addMovieButton: PropTypes.boolean,
  tmdbConfiguration: PropTypes.object.isRequired,
  addMovie: PropTypes.func
}

