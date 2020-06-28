import React, { Component } from 'react';
import styles from './sign-up-styles';
import withStyles from 'react-jss';
import Input from '../../../shared/components/form-elements/input';
import { isEmail, isEmpty, matches } from 'validator';
import trim from '../../../utils/trim';
import validateField from '../../../utils/forms/validateFields';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    formData: {
      name: {
        elementType: 'input',
        config: {
          type: 'text',
          placeholder: 'Your name'
        },
        preValidators: [
          (str) => trim(str)
        ],
        validators: [
          (str) => !isEmpty(str),
          (str) => matches(str, /^[a-zA-z ,.'-]+$/)
        ],
        isValid: false,
        isTouched: false,
        errorMsg: 'Please provide a valid name',
        value: ''
      },
      email: {
        elementType: 'input',
        config: {
          type: 'text',
          placeholder: 'Email address'
        },
        preValidators: [],
        validators: [
          (str) => !isEmpty(str),
          (str) => isEmail(str)
        ],
        isValid: false,
        isTouched: false,
        errorMsg: 'Please provide a valid email',
        value: ''
      },
      password: {
        elementType: 'input',
        config: {
          type: 'password',
          placeholder: 'Password (min 8 characters)'
        },
        preValidators: [],
        validators: [
          (str) => !isEmpty(str),
          (str) => str.length >= 8,
          (str) => !str.toLowerCase().includes('password')
        ],
        // isPassVisible: true,
        isValid: false,
        isTouched: false,
        errorMsg: 'Password cannot contain "password" string and min length is 8',
        value: ''
      }
    },
    isFormValid: false
  }

  componentDidUpdate = () => {
    if (this.props.isRegistered) {
      this.props.history.push('/signin');
    }
  }

  componentWillUnmount = () => {
    this.props.signUpReset();
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.isFormValid) {
      const formData = {
        name: this.state.formData.name.value,
        email: this.state.formData.email.value,
        password: this.state.formData.password.value
      };
      this.props.onSubmit(formData);
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
          <h1 className={classes.title}>Sign up</h1>
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
                // onIconClick={(e) => this.onIconClickHandler(e, item.id)}
                onInput={(e) => this.onChangeHandler(e, item.id) }
              />
            );
          })}
          <p className={classes.tips}>Your password must be at least 8 characters long and cannot contain word &quot;password&quot;.</p>
          {hasError && <div className={classes.errorMessage}>
            {hasError.message}
          </div>}
          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
            onClick={this.onSubmitHandler}
          >
            SIGN UP
          </Button>
          <span className={classes.linkContainer}>
            <Link
              to="/signin"
              className={classes.link}>
              Already registered? Sign in
            </Link>
          </span>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  signUpReset: PropTypes.func.isRequired,
  hasError: PropTypes.object,
  isRegistered: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
