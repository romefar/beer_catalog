import React from 'react';
import withStyles from 'react-jss';
import styles from './header-syles';
import PropTypes from 'prop-types';

const Header = ({ classes, children }) => {
  return (
    <header id="main_header"className={classes.header}>
      <div className={classes.container}>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any
};

export default withStyles(styles)(Header);
