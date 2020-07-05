import React, { Component, Suspense, lazy } from 'react';
import styles from './app-styles';
import MainNavigation from '../shared/components/navigation/main-navigation';
import { Route, Switch } from 'react-router-dom';
import withStyles, { ThemeProvider } from 'react-jss';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import BeerContainer from '../beer/containers/beer-container';
import BeerDetailsContainer from '../beer/containers/beer-details-container';
import SignUpContainer from '../authorization/containers/sign-up-container';
import SignInContainer from '../authorization/containers/sign-in-container';
import ProfileContainer from '../profile/containers/profile-container';
import ProflieDetailsContainer from '../profile/containers/profile-details-container';
import BeerSuggestionsContainer from '../suggestions/containers/beer-suggestions-container';
import FavouritesContainer from '../favourites/containers/favourites-container';
import { logout, signInSuccess } from '../redux/actions/sign-in-actions/sign-in-actions';
import { fetchBeerFavouritesIds } from '../redux/actions/profile-actions/profile-actions';
import { changeTheme } from '../redux/actions/theme-actions/theme-actions';
import PropTypes from 'prop-types';
import getAuthService from '../services/auth-service';
import PrivateRoute from '../shared/components/routing/private-route';
import themes from '../shared/themes/themes';
import getThemeService from '../services/theme-service';

// const BeerContainer = lazy(() => import('./routes/Home'));

class App extends Component {
  componentDidUpdate = (prevProps) => {
    const isTimerSettled = getAuthService().isTimerSettled();
    if (this.props.isLoggedIn && !isTimerSettled) {
      getAuthService().setLogoutTimer(this.props.userData.expiration, this.props.logout);
      this.props.fetchBeerFavouritesIds();
    }
  }

  componentDidMount = () => {
    getAuthService().checkSignIn(this.props.signInSuccess);
    getThemeService().checkTheme(this.props.changeTheme);
    if (this.props.isLoggedIn) {
      this.props.fetchBeerFavouritesIds();
    }
  }

  componentWillUnmount = () => {
    getAuthService().clearLogoutTimer();
  }

  render = () => {
    const { isLoggedIn, themeName } = this.props;
    return (
      <ThemeProvider theme={themes[themeName]}>
        <MainNavigation />
        <Switch>
          <Route path="/" component={BeerContainer} exact />
          <PrivateRoute path="/beer/favourites" component={FavouritesContainer} exact/>
          <PrivateRoute path="/profile/settings" component={ProfileContainer} exact/>
          <PrivateRoute path="/suggestions" component={BeerSuggestionsContainer} exact/>
          <PrivateRoute path="/profile" component={ProflieDetailsContainer} exact/>
          <Route path="/beer/:beerId" component={BeerDetailsContainer} />
          {!isLoggedIn && <Route path="/signup" component={SignUpContainer} />}
          {!isLoggedIn && <Route path="/signin" component={SignInContainer} />}
        </Switch>
      </ThemeProvider>
    );
  }
};

const mapStateToProps = ({
  signIn: { isLoggedIn, userData },
  theme: { themeName }
}) => {
  return {
    isLoggedIn,
    userData,
    themeName
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout,
    signInSuccess,
    fetchBeerFavouritesIds,
    changeTheme
  }, dispatch);
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userData: PropTypes.object,
  logout: PropTypes.func.isRequired,
  signInSuccess: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
  fetchBeerFavouritesIds: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(App);
