import React from 'react';
import { Drawer } from 'material-ui';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      open: false
    };
  }
  handleToggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <Drawer
        width={300}
        docked={false}
        open={this.state.open}
        onRequestChange={this.handleToggle}
      >
      </Drawer>
    );
  }
}

export default LeftNav;
