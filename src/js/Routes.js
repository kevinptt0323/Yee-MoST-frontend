import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    );
  }
}

export default Routes;


