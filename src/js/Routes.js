import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from './App';
import Login from './pages/Login';
import FileList from './pages/FileList';
import Show from './pages/Show';

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="files" />
          <Route path="login" component={Login} />
          <Route path="files" component={FileList} />
          <Route path="files/:filename" component={Show} />
        </Route>
      </Router>
    );
  }
}

export default Routes;


