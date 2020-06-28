import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpSubmit, signUpReset } from '../../redux/actions/sign-up-actions/sign-up-actions';
import SignUp from '../components/sign-up';
import PropTypes from 'prop-types';

class SignUpContainer extends Component {
  render = () => {
    const { hasError, isRegistered, signUpSubmit, history, signUpReset } = this.props;
    return (
      <SignUp
        hasError={hasError}
        isRegistered={isRegistered}
        signUpReset={signUpReset}
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
    signUpSubmit,
    signUpReset
  }, dispatch);
};

SignUpContainer.propTypes = {
  isRegistered: PropTypes.bool.isRequired,
  signUpSubmit: PropTypes.func.isRequired,
  signUpReset: PropTypes.func.isRequired,
  hasError: PropTypes.object,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
