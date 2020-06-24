import React from 'react';
import withStyles from 'react-jss';
import styles from './settings-dropdown-item-styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SettingsDropdownItem = ({ classes, icon, title, to, controlElement, divider }) => {
  const content = (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.iconContainer}>
          {icon}
        </div>
        {title}
      </div>
      {controlElement}
    </div>
  );
  if (divider) {
    return (
      <div className={classes.divider}></div>
    );
  }

  if (to) {
    return (
      <Link className={classes.link}>
        {content}
      </Link>
    );
  }
  return content;
};

SettingsDropdownItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.object,
  controlElement: PropTypes.object,
};

export default withStyles(styles)(SettingsDropdownItem);