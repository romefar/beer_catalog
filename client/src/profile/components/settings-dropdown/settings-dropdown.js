import React, { PureComponent, createRef } from 'react';
import withStyles from 'react-jss';
import styles from './settings-dropdown-styles';
import PropTypes from 'prop-types';
import SettingsDropdownItem from '../settings-dropdown-item';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import Switch from '@material-ui/core/Switch';

class SettingsDropdown extends PureComponent {
  state = {
    themeCheckbox: false
  }

  node = createRef()

  componentDidMount = () => {
    document.addEventListener('mousedown', this.onClickHandler, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.onClickHandler, false);
  }

  onClickHandler = (e) => {
    // TODO: Find another approach
    if (!this.node.contains(e.target) && !this.props.containerNodeRef.contains(e.target)) {
      this.props.onClick();
    }
  }

  onChangeHandler = (e) => {
    const name = e.target.name;
    this.setState(state => {
      return {
        [name]: !state[name]
      };
    });
  }

  render = () => {
    return (
      <div
        className={this.props.classes.container}
        ref={node => { this.node = node; } }>
        <SettingsDropdownItem
          icon={<AccountBoxOutlinedIcon />}
          onClick={this.props.onClick}
          title="Profile"
          to="/profile"
        />
        <SettingsDropdownItem
          icon={<SettingsOutlinedIcon />}
          title="Settings"
          onClick={this.props.onClick}
          to="/profile/settings"
        />
        <SettingsDropdownItem divider />
        <SettingsDropdownItem
          icon={<NightsStayOutlinedIcon />}
          title="Dark mode"
          controlElement={
            <Switch
              checked={this.state.themeCheckbox}
              onChange={this.onChangeHandler}
              name="themeCheckbox"
              color="primary" />}
        />
        <SettingsDropdownItem
          icon={<ExitToAppOutlinedIcon />}
          title="Logout"
          onClick={this.props.logout}
        />
      </div>
    );
  }
};

SettingsDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  containerNodeRef: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default withStyles(styles)(SettingsDropdown);
