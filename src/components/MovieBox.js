import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../styles";

export const BoxContainer = styled.li`
  padding: 24px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 1s;
`;

export const MoviePoster = styled.img`display: inline-block;`;

const Movie = styled(Link) `
  width: 70%;
  font-weight: bold;
`;

const AddMovieBtn = styled.button`
  display:  ${props => props.hideButton ? 'none' : 'block'};
  width: 34px;
  height: 34px;
  line-height: 30px;
  border: 2px solid #f5f5f5;
  border-radius: 50%;
  color: #f5f5f5;
  text-align: center;
  text-decoration: none;
  background: #464646;
  box-shadow: 0 0 3px gray;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #262626;
  }
`;

const Plot = styled.div`
  font-style: italic;
  font-size: 12px;
  width: 300px;
`;

export default (props) => {

  return (
    <BoxContainer key={props.key}>
      <Movie to={`/movie/${props.movie.id}`}>
        {`${props.movie.title} (${props.movie.release_date.slice(0, 4)})`}
      </Movie>
      <Plot>
        {props.movie.overview}
      </Plot>
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

