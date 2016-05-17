import React, { PropTypes } from 'react';
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
    this.state = { token: null };
    this.setToken = this.setToken.bind(this);
    this.getToken = this.getToken.bind(this);
  }
  onLeftIconButtonTouchTap() {
    this.refs.leftNav.handleToggle();
  }
  setToken(token) {
    this.setState({ token: token });
  }
  getToken() {
    return this.state.token;
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{width: '100vw', height: '100vh'}}>
          <AppBar
            onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
            title="Hello, world!"
          />
          <LeftNav ref="leftNav" />
          <div
            style={{
              height: 'calc(100% - 64px)',
            }}
          >
            {
              React.cloneElement(
                this.props.children,
                { setToken: this.setToken, getToken: this.getToken }
              )
            }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
