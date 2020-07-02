import React, { Component } from 'react';
import styles from './change-password-form-styles';
import withStyles from 'react-jss';
import Input from '../../../shared/components/form-elements/input';
import { isEmpty } from 'validator';
import validateField from '../../../utils/forms/validateFields';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const CURRENT_PASSWORD = 'Current password';
const NEW_PASSWORD = 'New password';
const NEW_PASSWORD_REPEAT = 'Repeat new password';

class ChangePasswordForm extends Component {
  state = {
    formData: {
      [CURRENT_PASSWORD]: {
        elementType: 'input',
        config: {
          type: 'password',
          placeholder: 'Current password'
        },
        preValidators: [],
        validators: [
          (str) => !isEmpty(str)
        ],
        isValid: false,
        isTouched: false,
        errorMsg: 'Please input your current password',
        value: ''
      },
      [NEW_PASSWORD]: {
        elementType: 'input',
        config: {
          type: 'password',
          placeholder: 'New password'
        },
        preValidators: [],
        validators: [
          (str) => !isEmpty(str),
          (str) => str.length >= 8,
          (str) => !str.toLowerCase().includes('password')
        ],
        isValid: false,
        isTouched: false,
        errorMsg: 'Password cannot contain "password" string and min length is 8',
        value: ''
      },
      [NEW_PASSWORD_REPEAT]: {
        elementType: 'input',
        config: {
          type: 'password',
          placeholder: 'Repeat new password'
        },
        preValidators: [],
        validators: [
          (str) => !isEmpty(str),
          (str) => str.length >= 8,
          (str) => !str.toLowerCase().includes('password')
        ],
        isValid: false,
        isTouched: false,
        errorMsg: 'Password cannot contain "password" string and min length is 8',
        value: ''
      }
    },
    areEquals: true,
    isFormValid: false
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.isFormValid) {
      const formData = {
        currentPassword: this.state.formData[CURRENT_PASSWORD].value,
        newPassword: this.state.formData[NEW_PASSWORD].value
      };
      this.props.onPasswordChange(formData);
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
    let areEquals = true;
    if (inputName === NEW_PASSWORD || inputName === NEW_PASSWORD_REPEAT) {
      const relatedField = inputName === NEW_PASSWORD ? NEW_PASSWORD_REPEAT : NEW_PASSWORD;
      if (updatedFormElement.value !== this.state.formData[relatedField].value) {
        areEquals = false;
      } else {
        areEquals = true;
      }
    }

    formData[inputName] = updatedFormElement;

    let isFormValid = true;
    for (const [, data] of Object.entries(formData)) {
      isFormValid = data.isValid && isFormValid;
    }

    this.setState({
      formData,
      isFormValid: isFormValid && areEquals,
      areEquals
    });
  }

  render = () => {
    const { classes } = this.props;
    const { areEquals } = this.state;
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
          {!areEquals && <div className={classes.errorMessage}>Passwords are not equals.</div>}
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            className={classes.submitButton}
            onClick={this.onSubmitHandler}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

ChangePasswordForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  hasError: PropTypes.object
};

export default withStyles(styles)(ChangePasswordForm);
