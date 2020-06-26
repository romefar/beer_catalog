import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpSubmit } from '../../redux/actions/sign-up-actions/sign-up-actions';
import SignUp from '../components/sign-up';

class SignUpContainer extends Component {
  render = () => {
    const { hasError, isRegistered, signUpSubmit, history } = this.props;
    return (
      <SignUp
        hasError={hasError}
        isRegistered={isRegistered}
        onSubmit={signUpSubmit}
        history={history}
      />
    );
  }
}

const mapStateToProps = ({
  signUp: { hasError, isRegistered }
}) => {
  return {
    hasError,
    isRegistered
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signUpSubmit
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
