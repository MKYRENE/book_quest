import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import client from './client'; // Your Apollo Client configuration

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
        <ApolloProvider client={client}>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </ApolloProvider>
        </Switch>
      </>
    </Router>
  );
}

export default App;
