import React, { PropTypes } from 'react';
import { AppBar } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigo500 } from 'material-ui/styles/colors';

import LeftNav from './LeftNav';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
  }
  onLeftIconButtonTouchTap() {
    this.refs.leftNav.handleToggle();
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
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
