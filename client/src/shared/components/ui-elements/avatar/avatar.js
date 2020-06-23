import React from 'react';
import withStyles from 'react-jss';
import styles from './avatar-styles';
import PropTypes from 'prop-types';

const Avatar = ({ classes, imageUrl, alt }) => {
  return (
    <div className={classes.container}>
      <img
        src={imageUrl}
        title="Your avatar"
        alt={alt}/>
    </div>
  );
};

Avatar.propTypes = {
  classes: PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default withStyles(styles)(Avatar);
