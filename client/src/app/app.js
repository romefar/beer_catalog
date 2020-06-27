import React, { Component } from 'react';
import styles from './app-styles';
import MainNavigation from '../shared/components/navigation/main-navigation';
import { Route } from 'react-router-dom';
import withStyles, { ThemeProvider } from 'react-jss';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import BeerContainer from '../beer/containers/beer-container';
import BeerDetailsContainer from '../beer/containers/beer-details-container';
import SignUpContainer from '../authorization/containers/sign-up-container';
import SignInContainer from '../authorization/containers/sign-in-container';
import { logout, signInSuccess } from '../redux/actions/sign-in-actions/sign-in-actions';
import { fetchBeerFavourites } from '../redux/actions/profile-actions/profile-actions';
import PropTypes from 'prop-types';
import getAuthService from '../services/auth-service';

const theme = {
  linkColor: 'white'
};

class App extends Component {
  componentDidUpdate = () => {
    const isTimerSettled = getAuthService().isTimerSettled();
    if (this.props.isLoggedIn && !isTimerSettled) {
      console.log(`Timer : ${isTimerSettled} && IsLoggedIn ${this.props.isLoggedIn}`);
      getAuthService().setLogoutTimer(this.props.userData.expiration, this.props.logout);
      this.props.fetchBeerFavourites();
    }
  }

  componentDidMount = () => {
    getAuthService().checkSignIn(this.props.signInSuccess);
    if (this.props.isLoggedIn) {
      this.props.fetchBeerFavourites();
    }
  }

  componentWillUnmount = () => {
    getAuthService().clearLogoutTimer();
  }

  render = () => {
    const { isLoggedIn } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainNavigation />
        <Route path="/" exact>
          <BeerContainer />
        </Route>
        <Route path="/beer/:beerId" component={BeerDetailsContainer} />
        {!isLoggedIn && <Route path="/signup" component={SignUpContainer} />}
        {!isLoggedIn && <Route path="/signin" component={SignInContainer} />}
      </ThemeProvider>
    );
  }
};

const mapStateToProps = ({
  signIn: { isLoggedIn, hasError, userData }
}) => {
  return {
    isLoggedIn,
    userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout,
    signInSuccess,
    fetchBeerFavourites
  }, dispatch);
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userData: PropTypes.object,
  logout: PropTypes.func.isRequired,
  signInSuccess: PropTypes.func.isRequired,
  fetchBeerFavourites: PropTypes.func.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(App);
