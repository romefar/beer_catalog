import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './nav-links-styles';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const NavLinks = ({ classes }) => {
  return (
    <ul className={classes.navLinksList}>
      <li>
        <NavLink className={classes.navLinkItem} to="/asd">Beers</NavLink>
      </li>
      <li>
        <NavLink className={classes.navLinkItem} to="/dd"> Test </NavLink>
      </li>
      <li>
        <Link to="/signup">
          <button className={classes.authButton}>
            Sign up
          </button>
        </Link>
      </li>
      <li>
        <Link to="/signin">
          <button className={classes.authButton}>
            Login
          </button>
        </Link>
      </li>
    </ul>
  );
};

NavLinks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { injectTheme: true })(NavLinks);
