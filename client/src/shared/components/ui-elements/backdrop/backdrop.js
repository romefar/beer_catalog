import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './backdrop-styles';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Backdrop);
