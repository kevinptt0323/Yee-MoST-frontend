import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import LoginPage from './Login';

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={LoginPage} />
        </Route>
      </Router>
    );
  }
}

export default Routes;


