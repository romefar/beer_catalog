import React, { Component } from 'react';
import styles from './sign-in-styles';
import withStyles from 'react-jss';
import Input from '../../../shared/components/form-elements/input';
import { isEmail, isEmpty } from 'validator';
import validateField from '../../../utils/forms/validateFields';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  state = {
    formData: {
      email: {
        elementType: 'input',
        config: {
          type: 'email',
          placeholder: 'Email address'
        },
        preValidators: [],
        validators: [
          (str) => !isEmpty(str),
          (str) => isEmail(str)
        ],
        isValid: false,
        isTouched: false,
        errorMsg: 'Please provide a valid email.',
        value: ''
      },
      password: {
        elementType: 'input',
        config: {
          type: 'password',
          placeholder: 'Password'
        },
        preValidators: [],
        validators: [
          (str) => !isEmpty(str)
        ],
        isValid: false,
        isTouched: false,
        errorMsg: 'Password cannot be an empty string.',
        value: ''
      }
    },
    isFormValid: false
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.isFormValid) {
      const formData = {
        email: this.state.formData.email.value,
        password: this.state.formData.password.value
      };
      this.props.onSubmit(formData, this.props.history);
    }
  }

  onChangeHandler = (e, inputName) => {
    const value = e.target.value;
    const preValidators = this.state.formData[inputName].preValidators;
    const validators = this.state.formData[inputName].validators;
    const [validatedValue, isValid] = validateField(value, preValidators, validators);
    const formData = { ...this.state.formData };
    const updatedFormElement = formData[inputName] = {
      ...formData[inputName],
      isValid,
      value: validatedValue || value,
      isTouched: true
    };
    formData[inputName] = updatedFormElement;

    let isFormValid = true;
    for (const [, data] of Object.entries(formData)) {
      isFormValid = data.isValid && isFormValid;
    }
    this.setState({
      formData,
      isFormValid
    });
  }

  render = () => {
    const { classes, hasError } = this.props;
    const formElements = [];
    for (const [key, data] of Object.entries(this.state.formData)) {
      formElements.push({
        id: key,
        elementType: data.elementType,
        config: data.config,
        value: data.value,
        isValid: data.isValid,
        isTouched: data.isTouched,
        errorMsg: data.errorMsg
      });
    }
    return (
      <div className={classes.container}>
        <form className={classes.signUpForm} onSubmit={this.onSubmitHandler}>
          <h1 className={classes.title}>Sign in</h1>
          {formElements.map(item => {
            return (
              <Input
                label={item.id}
                key={item.id}
                elementType={item.elementType}
                config={item.config}
                value={item.value}
                isValid={item.isValid}
                isTouched={item.isTouched}
                errorMsg={item.errorMsg}
                isPassVisible={item.isPassVisible}
                onInput={(e) => this.onChangeHandler(e, item.id) }
              />
            );
          })}
          {hasError && <div className={classes.errorMessage}>
            {hasError.message}
          </div>}
          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
            onClick={this.onSubmitHandler}
          >
            SIGN IN
          </Button>
          <span className={classes.linkContainer}>
            <Link
              to="/signin"
              className={classes.link}>
              Not a member? Sign up
            </Link>
          </span>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.object,
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
