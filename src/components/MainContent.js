import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import MovieWrapper from './MovieWrapper';
import UserList from './UserList';
import SearchResults from './SearchResults';
import UserForm from './UserForm';

const MainContent = () => {

  return (
    <main role='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search-results' component={SearchResults} />
        <Route path='/movie/:id' component={MovieWrapper} />
        <Route path='/movie-list' component={UserList} />
        <Route path='/create-user' component={UserForm} />
      </Switch>
    </main>
  )
};

export default MainContent;
