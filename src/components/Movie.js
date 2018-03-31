import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NoPosterFilm } from '../styles';
import filmLogo from '../svg/film.svg';

const MoviePage = styled.div`
  display: grid;
  grid-template-columns: 30% 60% 10%;
  grid-template-rows: 15% 15% 40% 30%;
  justify-items: center;
  margin: 32px;
`;

const Title = styled.h1`
  font-weight: bold;
  grid-column: 2 / 3;

`;

const OriginalTitle = styled.h3`
  font-style: italic;
  grid-column: 2 / 3;
  margin: 0 auto 48px;
`;

const MovieOverview = styled.p`
  grid-row: 3 / 5;
`;

const Poster = styled.img`
  grid-row: 3 / 5;
`;

const AverageScore = styled.div`
  grid-row: 3 / 4;
  font-size: 48px;
  color: ${props => props.theme.mainColor};
`;

const Movie = (props) => {

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
      <Title>{`${title} (${releaseDate ? releaseDate : 'Unknown'})`}</Title>
      <OriginalTitle>{`(${originalTitle} - ${originalLang})`}</OriginalTitle>
      <MovieOverview>{overview ? `${overview}` : `No overview found for this movie`}</MovieOverview>
      {posterPath ?
        <Poster
          src={`${config.imagesUrl}/${config.posterSizes}${posterPath}`}
          alt={`${title} poster`} />
        :
        <NoPosterFilm width="480px" path={filmLogo} />
      }
      <AverageScore>{voteAverage}</AverageScore>
    </MoviePage>
  )
}

export default Movie;

Movie.propTypes = {
  prop1: PropTypes.bool
}

