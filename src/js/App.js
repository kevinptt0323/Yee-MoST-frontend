import React from 'react';
import { AppBar } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigo500 } from 'material-ui/styles/colors';

import LeftNav from './components/LeftNav';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
    this.state = { token: "" };

    this.setToken = this.setToken.bind(this);
    this.getToken = this.getToken.bind(this);
    this.login = this.login.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onLeftIconButtonTouchTap() {
    this.refs.leftNav.handleToggle();
  }
  setToken(token, cb) {
    this.setState({ token: token }, cb);
  }
  getToken() {
    return this.state.token;
  }
  login() {
    const { pathname, query } = this.props.location;
    this.setState({ beforeLogin: { pathname, query }});
    this.context.router.push('/login');
  }
  onLogin() {
    const { beforeLogin: state = "/files" } = this.state;
    this.context.router.push(state);
  }
  render() {
    let { setToken, getToken, login, onLogin } = this;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{width: '100vw', height: '100vh'}}>
          <AppBar
            onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
            style={{ position: 'fixed' }}
            title="Hello, world!"
          />
          <LeftNav ref="leftNav" />
          <div
            style={{
              position: 'relative',
              height: 'calc(100% - 64px)',
              top: '64px'
            }}
          >
            {
              React.cloneElement(
                this.props.children,
                { setToken, getToken, login, onLogin }
              )
            }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default App;
