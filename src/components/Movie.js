import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NoPosterFilm } from '../styles';
import filmLogo from '../svg/film.svg';

const MoviePage = styled.div`
`;

const Title = styled.h1`
`;

const OriginalTitle = styled.h2`
`;

const MovieOverview = styled.p`
`;

const Poster = styled.img`
`;

const AverageScore = styled.div`
  font-size: 48px;
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
      <OriginalTitle>{`${originalTitle} - ${originalLang}`}</OriginalTitle>
      <MovieOverview>{overview ? `${overview}...` : `No overview found for this movie`}</MovieOverview>
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

