import React from "react";
import styled from "styled-components";

export default (props) => {

  return (
    <BoxContainer key={props.index}>
      <Link to={`/movie/${props.movie.id}`}>
        {`${propsmovie.title} (${propsmovie.release_date.slice(0, 4)})`}
      </Link>
      <Plot>
        {props.movie.overview}
      </Plot>
      <MoviePoster
        src={`${propstmdbConfiguration.images.base_url}/${propstmdbConfiguration
          .images.poster_sizes[0]}${propsmovie.poster_path}`}
        alt={`${propsmovie.title} poster`}
      />
      {props.addMovieButton && 
      <AddMovieBtn hideButton={props.hideButton} onClick={props.addMovie(movie.id)}>
        +
      </AddMovieBtn>}
    </BoxContainer>
  )
};

