import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signInSubmit, signInReset } from '../../redux/actions/sign-in-actions/sign-in-actions';
import SignIn from '../components/sign-in';

class SignInContainer extends Component {
  render = () => {
    const { hasError, isLoggedIn, signInSubmit, signInReset, history } = this.props;
    return (
      <SignIn
        hasError={hasError}
        isLoggedIn={isLoggedIn}
        signInReset={signInReset}
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
    signInSubmit,
    signInReset
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
