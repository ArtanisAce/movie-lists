import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import Fade from './Fade';
import { fadeIn } from '../styles';
import filmLogo from '../svg/film.svg';

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
  margin-right: 24px;
  width: 48px;
  height: 48px;
  line-height: 46px;
  border: 2px solid white;
  border-radius: 50%;
  color: ${props => props.theme.secondaryColor};
  text-align: center;
  text-decoration: none;
  background: ${props => props.theme.mainColor};
  box-shadow: 0 0 3px ${props => props.theme.boxShadowColor};
  font-size: 27px;
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

const AddedText = styled.p`
  margin-right: 20px;
`;

const NoPosterFilm = styled(ReactSVG) `
  width: 92px;
`;

const MovieBox = (props) => {

  const {
    movie,
    hideButton,
    addMovie,
    addMovieButton,
    keyIndex,
    config
  } = props;

  const {
    id,
    title,
    releaseDate,
    overview,
    posterPath
  } = movie;

  const fadeChild = hideButton ?
    (<AddedText key='child1'>Added!</AddedText>)
    :
    (<AddMovieBtn key='child2' aria-label='add-movie-button' onClick={() => addMovie(id)}>
      +
    </AddMovieBtn>)

  return (
    <BoxContainer key={keyIndex}>
      <MovieHeader>
        <Title to={`/movie/${id}`}>
          {`${title} (${releaseDate ? releaseDate : 'Unknown'})`}
        </Title>
        <Plot>
          {overview ? `${overview}...` : `No overview available!`}
        </Plot>
      </MovieHeader>
      {posterPath ?
        <MoviePoster
          src={`${config.imagesUrl}/${config.posterSizes}${posterPath}`}
          alt={`${title} poster`} />
        :
        <NoPosterFilm path={filmLogo}/>
      }
      {addMovieButton &&
        <Fade duration={800} in={!hideButton} appear={true}>
          {fadeChild}
        </Fade>}
    </BoxContainer>
  )
};

export default MovieBox;

MovieBox.defaultProps = {
  hideButton: false,
  addMovieButton: false
}

MovieBox.propTypes = {
  key: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
  hideButton: PropTypes.boolean,
  addMovieButton: PropTypes.boolean,
  config: PropTypes.object.isRequired,
  addMovie: PropTypes.func
}

