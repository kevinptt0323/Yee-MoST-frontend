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
    this.state = { token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjg5LCJpc3MiOiJodHRwOlwvXC9jc3d3d2Rldi5jcy5uY3R1LmVkdS50dzo3MTIyXC9hcGlcL2xvZ2luIiwiaWF0IjoxNDYzNDg0MzQ1LCJleHAiOjE0NjM0ODc5NDUsIm5iZiI6MTQ2MzQ4NDM0NSwianRpIjoiZThlYTJlZTI2ZmVjZGZkYmEwOWYyNGE3MDk5OTBmOTMifQ.fL7-ZNPuEcVJNmAP_HmS_6r05XygstDe2_GgECkh5XM" };
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
