import React, { PureComponent, Fragment } from 'react';
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
import SideDrawer from '../sidedrawer';
import Backdrop from '../../ui-elements/backdrop';

class MainNavigation extends PureComponent {
  state = {
    isDrawerVisible: false
    // isMobile: false
  }

  // onResizeHandler = () => {
  //   if (window.innerWidth <= 768) {
  //     this.setState({
  //       isMobile: true
  //     });
  //   }
  // }

  // setResizeHandler = () => {
  //   window.onresize = this.onResizeHandler;
  // }

  onCloseDrawerHandler = () => {
    this.setState({
      isDrawerVisible: false
    });
  }

  onOpenDrawerHandler = () => {
    this.setState({
      isDrawerVisible: true
    });
  }

  render = () => {
    const { classes, isLoggedIn, userData, logout } = this.props;
    const { isDrawerVisible } = this.state;
    return (
      <Fragment>
        { isDrawerVisible && <Backdrop onClick={this.onCloseDrawerHandler}/> }
        <SideDrawer visible={isDrawerVisible} onClick={this.onCloseDrawerHandler}>
          <nav className={classes.navDrawer}>
            <NavLinks isLoggedIn={isLoggedIn}/>
          </nav>
        </SideDrawer>
        <Header>
          <div className={classes.menuHeaderContainer}>
            <button
              className={classes.menuButton}
              onClick={this.onOpenDrawerHandler}
            >
              <MenuIcon />
            </button>
            <h1 className={classes.headerTitle}>
              <Link to="/">
            BEER
              </Link>
            </h1>
          </div>
          <div className={classes.navProfileContainer}>
            <nav className={classes.headerNav}>
              <NavLinks isLoggedIn={isLoggedIn}/>
            </nav>
            {isLoggedIn && <ProfilePanel userData={userData} logout={logout}/>}
          </div>

        </Header>
      </Fragment>
    );
  }
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
