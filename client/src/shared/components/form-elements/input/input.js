import React from 'react';
import styles from './input-styles';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = (props) => {
  const {
    label,
    classes,
    elementType,
    value,
    isValid,
    isTouched,
    errorMsg,
    config,
    onInput
  } = props;

  let element = null;
  switch (elementType) {
    case 'input':
      element = <input
        {...config}
        className={clsx({
          [classes.inputItem]: true,
          [classes.inputInvalid]: !isValid && isTouched
        })}
        value={value}
        onChange={onInput}
      />;
      break;
    case 'textarea':
      element = <textarea
        {...config}
        className={clsx({
          [classes.inputItem]: true,
          [classes.inputInvalid]: !isValid && isTouched
        })}
        value={value}
        onChange={onInput}
      />;
      break;
    default:
      element = <input
        {...config}
        className={clsx({
          [classes.inputItem]: true,
          [classes.inputInvalid]: !isValid && isTouched
        })}
        value={value}
        onChange={onInput}
      />;
      break;
  }

  return (
    <div className={classes.container}>
      <label className={classes.labelItem}>{label}</label>
      {element}
      {/* <VisibilityOutlinedIcon /> */}
      {!isValid && isTouched && <p className={classes.errorMessage}>{errorMsg}</p>}
    </div>
  );
};

Input.propTypes = {
  isValid: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  elementType: PropTypes.string,
  isTouched: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string,
  config: PropTypes.object.isRequired,
  onInput: PropTypes.func.isRequired
};

Input.defaultProps = {
  errorMsg: 'Invalid input'
};

export default withStyles(styles)(Input);
