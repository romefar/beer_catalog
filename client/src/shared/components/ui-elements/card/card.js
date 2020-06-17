import React from 'react';
import withStyles from 'react-jss';
import styles from './card-styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Card = ({ classes, className, children }) => {
  return (
    <div className={clsx(classes.card, className)}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.any
};

Card.defaultProps = {
  className: {}
};

export default withStyles(styles)(Card);
