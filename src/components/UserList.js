import React from "react";
import { connect } from "react-redux";
import MovieBox from "./MovieBox";
import styled from "styled-components";

// TODO: Pasar el config a una accion en react router al hacer login, guardar en localstorage quizas?
export const List = styled.ul`
  list-style-type: none;
`;

const UserList = props => {
  const tmdbConfiguration = props.config;
  console.log(tmdbConfiguration);

  if (!props.filmsList.length) {
    return <div> No movies added! :( </div>;
  }

  if (Object.keys(tmdbConfiguration).length === 0) {
    return <div> An error ocurred! :(</div>
  }

  return (
    <List>
      {props.filmsList.map((movie, i) => {
        return (
          <MovieBox
            key={i}
            movie={movie}
            tmdbConfiguration={tmdbConfiguration}
            addMovie={this.addMovie}
          />
        );
      })}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    filmsList: state.filmsList,
    config: state.config
  };
};

export default connect(mapStateToProps, null)(UserList);
