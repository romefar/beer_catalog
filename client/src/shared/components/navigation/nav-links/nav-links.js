import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './nav-links-styles';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const NavLinks = ({ classes, isLoggedIn }) => {
  return (
    <ul className={classes.navLinksList}>
      <li>
        <NavLink className={classes.navLinkItem} to="/asd">Beers</NavLink>
      </li>
      {isLoggedIn && <li>
        <NavLink
          className={classes.navLinkItem}
          to="/beer/favourites"
        >
          Favourites
        </NavLink>
      </li>}
      {!isLoggedIn && <li>
        <Link to="/signup">
          <button className={classes.authButton}>
            Sign up
          </button>
        </Link>
      </li>}
      {!isLoggedIn && <li>
        <Link to="/signin">
          <button className={classes.authButton}>
            Login
          </button>
        </Link>
      </li>}
    </ul>
  );
};

NavLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default withStyles(styles, { injectTheme: true })(NavLinks);
