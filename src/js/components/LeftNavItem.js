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
    const { primaryText, leftIcon } = this.props;
    const props = { primaryText, leftIcon };
    return (
      <MenuItem
        onTouchTap={this.onMenuItemTap}
        {...props}
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
