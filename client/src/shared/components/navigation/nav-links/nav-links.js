import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav-links-styles';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const NavLinks = ({ classes }) => {
  return (
    <ul className={classes.navLinksList}>
      <li>
        <NavLink to="/asd">Beers</NavLink>
      </li>
      <li>
        <NavLink to="/dd"> Test </NavLink>
      </li>
      <li>
        <button className={classes.authButton}>
        Sign up
        </button>
      </li>
      <li>
        <button className={classes.authButton}>
        Login
        </button>
      </li>
    </ul>
  );
};

NavLinks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { injectTheme: true })(NavLinks);
