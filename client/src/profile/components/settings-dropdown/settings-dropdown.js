import React, { PureComponent, createRef } from 'react';
import withStyles from 'react-jss';
import styles from './settings-dropdown-styles';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { DARK_THEME, LIGHT_THEME } from '../../../utils/constants/theme-constants';
import { changeTheme } from '../../../redux/actions/theme-actions/theme-actions';
import PropTypes from 'prop-types';
import SettingsDropdownItem from '../settings-dropdown-item';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import Switch from '@material-ui/core/Switch';
import getThemeService from '../../../services/theme-service';

class SettingsDropdown extends PureComponent {
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
    const checked = e.target.checked;
    const theme = checked ? DARK_THEME : LIGHT_THEME;
    this.props.changeTheme(theme);
    getThemeService().saveTheme(theme);
  }

  render = () => {
    const { themeName } = this.props;
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
              checked={themeName === DARK_THEME}
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

const mapStateToProps = ({
  theme: { themeName }
}) => {
  return {
    themeName
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeTheme
  }, dispatch);
};

SettingsDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  containerNodeRef: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(SettingsDropdown);
