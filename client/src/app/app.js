import React from 'react';
import styles from './app-styles';
import MainNavigation from '../shared/components/navigation/main-navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withStyles, { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import store from '../redux/store';
import BeerContainer from '../beer/containers/beer-container';
import BeerDetailsContainer from '../beer/containers/beer-details-container';
const theme = {
  linkColor: 'white'
};

const App = (props) => {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainNavigation />
          <Route path="/" exact>
            <BeerContainer />
          </Route>
          <Route path="/beer/:beerId" component={BeerDetailsContainer} />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default withStyles(styles)(App);
