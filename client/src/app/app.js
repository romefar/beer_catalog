import React from 'react';
import styles from './app-styles';
import MainNavigation from '../shared/components/navigation/main-navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import withStyles, { ThemeProvider } from 'react-jss';
import LoadingSpinner from '../shared/components/ui-elements/loading-spinner';

const theme = {
  linkColor: 'white'
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainNavigation />
      <LoadingSpinner />
      </ThemeProvider>
    </Router>
  );
};

export default withStyles(styles)(App);
