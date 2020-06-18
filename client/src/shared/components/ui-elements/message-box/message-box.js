import React from 'react';
import Card from '../card';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './message-box-styles';

const MessageBox = ({ text, children, classes }) => {
  return (
    <Card className={classes.container}>
      <h2 className={classes.header}>{text}</h2>
      {children}
    </Card>
  );
};

MessageBox.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
  classes: PropTypes.object.isRequired
};

MessageBox.defaultProps = {
  text: 'Nothing to show here.'
};

export default withStyles(styles)(MessageBox);
