import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NoPosterFilm } from "../styles";
import filmLogo from "../svg/film.svg";

const MoviePage = styled.div`
  margin: 32px;
  display: -ms-grid;
  -ms-grid-columns: 25% 50% 25%;
  -ms-grid-rows: 15% 15% 40% 30%;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 15% 15% 40% 30%;
  justify-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  -ms-grid-column-align: center;
  grid-column: 2 / 3;
`;

const OriginalTitle = styled.h3`
  font-style: italic;
  margin: 0 auto 48px;
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  -ms-grid-row: 2;
  -ms-grid-column-align: center;
  grid-column: 2 / 3;
`;

const MovieOverview = styled.p`
  -ms-grid-row: 3;
  -ms-grid-row-span: 2;
  -ms-grid-column-align: center;
  grid-row: 3 / 5;
`;

const Poster = styled.img`
  -ms-grid-row: 3;
  -ms-grid-row-span: 2;
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  -ms-grid-column-align: center;
  grid-row: 3 / 5;
`;

const AverageScore = styled.div`
  font-size: 56px;
  color: ${props => props.theme.mainColor};
  -ms-grid-row: 3;
  -ms-grid-row-span: 1;
  -ms-grid-column: 3;
  -ms-grid-column-span: 1;
  -ms-grid-column-align: center;
  grid-row: 3 / 4;
`;

const Movie = props => {
  const {
    title,
    originalTitle,
    voteAverage,
    originalLang,
    releaseDate,
    overview,
    posterPath,
    config
  } = props;

  return (
    <MoviePage>
      <Title>{`${title} (${releaseDate ? releaseDate : "Unknown"})`}</Title>
      <OriginalTitle>{`(${originalTitle} - ${originalLang})`}</OriginalTitle>
      <MovieOverview>
        {overview ? `${overview}` : `No overview found for this movie`}
      </MovieOverview>
      {posterPath ? (
        <Poster
          src={`${config.imagesUrl}/${config.posterSizes}${posterPath}`}
          alt={`${title} poster`}
        />
      ) : (
        <NoPosterFilm width="480px" path={filmLogo} />
      )}
      <AverageScore>{voteAverage}</AverageScore>
    </MoviePage>
  );
};

export default Movie;

Movie.propTypes = {
  prop1: PropTypes.bool
};
