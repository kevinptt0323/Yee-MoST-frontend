import React, { PropTypes } from 'react';
import { Drawer } from 'material-ui';
import { Link } from 'react-router';
import LeftNavItem from './LeftNavItem';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.onMenuListTap = this.onMenuListTap.bind(this);

    this.state = {
      open: false,
      menuItems: [
        { route: 'login', text: 'Login' },
        { route: 'login', text: 'Another Item' }
      ]
    };
  }
  handleToggle() {
    this.setState({ open: !this.state.open });
  }
  onMenuListTap(route) {
    this.context.router.push(`/${route}`);
    this.handleToggle();
  }
  render() {
    const menuLists = this.state.menuItems.map((data, index) => (
      <LeftNavItem
        key={index}
        primaryText={data.text}
        handleClick={this.onMenuListTap}
        route={data.route}
        isActive={this.context.router.isActive(data.route)}
      />
    ));
    return (
      <Drawer
        width={300}
        docked={false}
        open={this.state.open}
        onRequestChange={this.handleToggle}
      >
        {menuLists}
        {this.props.children}
      </Drawer>
    );
  }
}

LeftNav.contextTypes = {
    router: PropTypes.object,
};

export default LeftNav;
