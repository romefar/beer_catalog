import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import PropTypes from 'prop-types';
import withStyles, { ThemeProvider } from 'react-jss';
import LoadingSpinner from '../shared/components/ui-elements/loading-spinner';
import { logout, signInSuccess } from '../redux/actions/sign-in-actions/sign-in-actions';
import { fetchBeerFavouritesIds } from '../redux/actions/profile-actions/profile-actions';
import { changeTheme, clearTheme } from '../redux/actions/theme-actions/theme-actions';
import MainNavigation from '../shared/components/navigation/main-navigation';
import getAuthService from '../services/auth-service';
import PrivateRoute from '../shared/components/routing/private-route';
import themes from '../shared/themes/themes';
import MessageBox from '../shared/components/ui-elements/message-box';

import styles from './app-styles';

const BeerContainer = lazy(() => import('../beer/containers/beer-container'));
const BeerDetailsContainer = lazy(() => import('../beer/containers/beer-details-container'));
const SignUpContainer = lazy(() => import('../authorization/containers/sign-up-container'));
const SignInContainer = lazy(() => import('../authorization/containers/sign-in-container'));
const ProfileContainer = lazy(() => import('../profile/containers/profile-container'));
const ProfileDetailsContainer = lazy(() => import('../profile/containers/profile-details-container'));
const BeerSuggestionsContainer = lazy(() => import('../suggestions/containers/beer-suggestions-container'));
const FavouriteContainer = lazy(() => import('../favourites/containers/favourites-container'));

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
    if (this.props.isLoggedIn) {
      this.props.changeTheme(this.props.themeName);
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
        <Suspense
          fallback={<LoadingSpinner />}
        >
          <Switch>
            <Route path="/" component={BeerContainer} exact />
            <PrivateRoute path="/beer/favourites" component={FavouriteContainer} exact/>
            <PrivateRoute path="/profile/settings" component={ProfileContainer} exact/>
            <PrivateRoute path="/suggestions" component={BeerSuggestionsContainer} exact/>
            <PrivateRoute path="/profile" component={ProfileDetailsContainer} exact/>
            <Route path="/beer/:beerId" component={BeerDetailsContainer} />
            {!isLoggedIn && <Route path="/signup" component={SignUpContainer} />}
            {!isLoggedIn && <Route path="/signin" component={SignInContainer} />}
            <Route component={() => (
              <MessageBox text="404 Page is not found.">
                <Link to="/">
                  Visit home page
                </Link>
              </MessageBox>
            )} />
          </Switch>
        </Suspense>
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
    changeTheme,
    clearTheme
  }, dispatch);
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userData: PropTypes.object,
  logout: PropTypes.func.isRequired,
  signInSuccess: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
  fetchBeerFavouritesIds: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
  clearTheme: PropTypes.func.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(App);
