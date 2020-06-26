import React from 'react';
import styles from './main-navigation-styles';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import Header from '../header';
import { connect } from 'react-redux';
import { MenuIcon } from '../../../../assets';
import { Link } from 'react-router-dom';
import NavLinks from '../nav-links';
import { bindActionCreators, compose } from 'redux';
import ProfilePanel from '../../../../profile/components/profile-panel';
import { logout } from '../../../../redux/actions/sign-in-actions/sign-in-actions';

const MainNavigation = ({ classes, isLoggedIn, userData, logout }) => {
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
        <NavLinks isLoggedIn={isLoggedIn}/>
      </nav>
      {isLoggedIn && <ProfilePanel userData={userData} logout={logout}/>}
    </Header>
  );
};

const mapStateToProps = ({
  signIn: { isLoggedIn, userData }
}) => {
  return {
    isLoggedIn,
    userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout
  }, dispatch);
};

MainNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  userData: PropTypes.object
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(MainNavigation);
