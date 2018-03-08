import React from 'react';
// import styled from 'styled-components';

//WIP: Show poster and detailed info about the movie

export default (props) => {

  const movieId = parseInt(props.match.params.id, 10)

  return(
    <div>
      {movieId}
    </div>
  );
}