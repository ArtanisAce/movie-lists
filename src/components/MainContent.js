import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Movie from './Movie';
import UserList from './UserList';
import SearchResults from './SearchResults';
import UserForm from './UserForm';

const MainContent = ({error}) => {

  if (error) {
    console.error(error);
  }

  return (
    error ?
      <div>Oops, something went wrong :(</div>
      :
      <main role='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={SearchResults} />
          <Route path='/movie/:id' component={Movie} />
          <Route path='/movie-list' component={UserList} />
          <Route path='/create-user' component={UserForm} />
        </Switch>
      </main>
  )
};


const mapStateToProps = state => ({
  error: state.error
});

export default withRouter(connect(mapStateToProps, null)(MainContent));
