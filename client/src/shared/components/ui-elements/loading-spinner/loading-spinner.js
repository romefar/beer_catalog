import React from 'react';
import styles from './loading-spinner-styles';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ classes, asOverlay }) => {
  return (
    <div className={asOverlay ? classes.spinnerOverlay : null }>
      <div className={classes['loadingio-spinner-rolling-v81dbg85di8']}>
        <div className={classes['ldio-g8djpgziqln']}><div>
        </div></div>
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  classes: PropTypes.object.isRequired,
  asOverlay: PropTypes.bool
};

LoadingSpinner.defaultProps = {
  asOverlay: false
};

export default withStyles(styles)(LoadingSpinner);
