import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signInSubmit } from '../../redux/actions/sign-in-actions/sign-in-actions';
import SignIn from '../components/sign-in';

class SignInContainer extends Component {
  render = () => {
    const { hasError, isLoggedIn, signInSubmit, history } = this.props;
    return (
      <SignIn
        hasError={hasError}
        isLoggedIn={isLoggedIn}
        onSubmit={signInSubmit}
        history={history}
      />
    );
  }
}

const mapStateToProps = ({
  signIn: { hasError, isLoggedIn }
}) => {
  return {
    hasError,
    isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signInSubmit
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
