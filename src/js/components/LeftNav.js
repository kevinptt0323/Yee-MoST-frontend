import React from 'react';
import { Drawer, List, ListItem } from 'material-ui';
import { Link } from 'react-router';

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
        <List>
          <ListItem primaryText={<Link to="/login">Login</Link>} />
          <ListItem primaryText="Starred" />
        </List>
        {this.props.children}
      </Drawer>
    );
  }
}

export default LeftNav;
