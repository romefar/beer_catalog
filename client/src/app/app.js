import React from 'react';
import styles from './app-styles';
import MainNavigation from '../shared/components/navigation/main-navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import withStyles, { ThemeProvider } from 'react-jss';
import LoadingSpinner from '../shared/components/ui-elements/loading-spinner';
import { Provider } from 'react-redux';
import store from '../redux/store';
import BeerContainer from '../beer/containers/beer-container';

const theme = {
  linkColor: 'white'
};

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainNavigation />
          <LoadingSpinner />
          <BeerContainer />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default withStyles(styles)(App);
