import React, { PropTypes } from 'react';
import { Drawer, Menu, MenuItem } from 'material-ui';
import { Link } from 'react-router';

class LeftNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.onMenuItemTap = this.onMenuItemTap.bind(this);
  }
  onMenuItemTap() {
    const { handleClick } = this.props;
    handleClick();
  }
  render() {
    const { primaryText, leftIcon, route } = this.props;
    const props = { primaryText, leftIcon };
    return (
      <MenuItem
        containerElement={<Link to={route} />}
        onTouchTap={this.onMenuItemTap}
        {...props}
      />
    );
  }
}

LeftNavItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LeftNavItem;
