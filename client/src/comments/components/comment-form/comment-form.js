import React, { Component } from 'react';
import { isEmpty } from 'validator';
import Input from '../../../shared/components/form-elements/input';
import Button from '@material-ui/core/Button';
import styles from './comment-form-styles';
import validateField from '../../../utils/forms/validateFields';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  state = {
    formData: {
      description: {
        elementType: 'textarea',
        config: {
          placeholder: 'Input you comment here...'
        },
        preValidators: [],
        validators: [
          (str) => !isEmpty(str),
          (str) => str.length < 900
        ],
        isValid: false,
        isTouched: false,
        errorMsg: 'Please provide a comment (max length 900 chars)',
        value: ''
      }
    },
    isFormValid: false,
    isSent: false
  }

  componentDidUpdate = () => {
    if (this.state.isSent) {
      this.setState({
        formData: {
          description: {
            ...this.state.formData.description,
            isValid: false,
            value: '',
            isTouched: false
          }
        },
        isFormValid: false,
        isSent: false
      });
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.isFormValid) {
      const formData = {
        id: this.props.id,
        description: this.state.formData.description.value,
        creatorId: this.props.userId
      };
      this.props.onSubmit(formData);
      this.setState({
        isSent: true
      });
    }
  }

  onChangeHandler = (e) => {
    const value = e.target.value;
    const preValidators = this.state.formData.description.preValidators;
    const validators = this.state.formData.description.validators;
    const [validatedValue, isValid] = validateField(value, preValidators, validators);
    const formData = { ...this.state.formData };
    const updatedFormElement = formData.description = {
      ...formData.description,
      isValid,
      value: validatedValue || value,
      isTouched: true
    };
    formData.description = updatedFormElement;

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
    const { elementType, config, value, isValid, isTouched, errorMsg, isPassVisible } = this.state.formData.description;
    return (
      <div className={classes.container}>
        <form className={classes.signUpForm} onSubmit={this.onSubmitHandler}>
          <Input
            label="Comment"
            elementType={elementType}
            config={config}
            value={value}
            isValid={isValid}
            isTouched={isTouched}
            errorMsg={errorMsg}
            isPassVisible={isPassVisible}
            onInput={this.onChangeHandler}
          />
          {hasError && <div className={classes.errorMessage}>
            {hasError.message}
          </div>}
          <div className={classes.actions}>
            <Button
              variant="contained"
              color="primary"
              className={classes.submitButton}
              onClick={this.onSubmitHandler}
            >
            Send
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  hasError: PropTypes.object,
  userId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(CommentForm);
