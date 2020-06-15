import React from 'react';
import styles from './main-navigation-styles';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import Header from '../header';
import { MenuIcon } from '../../../../assets';
import { Link } from 'react-router-dom';
import NavLinks from '../nav-links';

const MainNavigation = ({ classes }) => {
  return (
    <Header>
      <button className={classes.menuButton}>
        <MenuIcon />
      </button>
      <h1 className={classes.headerTitle}>
        <Link to="/">
            BEER
        </Link>
      </h1>
      <nav className={classes.headerNav}>
        <NavLinks />
      </nav>
    </Header>
  );
};

MainNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainNavigation);
