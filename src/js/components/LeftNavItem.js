import React, { PropTypes } from 'react';
import { Drawer, Menu, MenuItem } from 'material-ui';
import { Link } from 'react-router';

class LeftNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.onMenuItemTap = this.onMenuItemTap.bind(this);
  }
  onMenuItemTap() {
    const { handleClick, route } = this.props;
    handleClick(route);
  }
  render() {
    const { primaryText, isActive } = this.props;
    return (
      <MenuItem
        primaryText={primaryText}
        onTouchTap={this.onMenuItemTap}
      />
    );
  }
}

LeftNavItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  route: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LeftNavItem;
