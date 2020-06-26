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
import PropTypes from 'prop-types';
const theme = {
  linkColor: 'white'
};

let timerId;

class App extends Component {
  #logoutTokenHandler = (expiration, logout) => {
    timerId = setTimeout(logout, expiration.getTime() - new Date().getTime());
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.isLoggedIn && !timerId) {
      timerId = this.#logoutTokenHandler(this.props.userData.expiration, this.props.logout);
    }
  }

  componentDidMount = () => {
    const storedData = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
    if (storedData && new Date(storedData.expiration > new Date())) {
      this.props.signInSuccess({
        ...storedData,
        expiration: new Date(storedData.expiration)
      });
    }
  }

  componentWillUnmount = () => {
    clearTimeout(timerId);
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
    signInSuccess
  }, dispatch);
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userData: PropTypes.object,
  logout: PropTypes.func.isRequired,
  signInSuccess: PropTypes.func.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(App);
