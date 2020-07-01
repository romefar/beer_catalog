import React from 'react';
import ImageUpload from '../../../shared/components/form-elements/image-upload';
import withStyles from 'react-jss';
import styles from './profile-settings-styles';
import PropTypes from 'prop-types';

const ProfileSettings = (props) => {
  const { classes, onImageUpload } = props;
  return (
    <div className={classes.container}>
      <h1>Settings</h1>
      <p>Here you can change your profile settings including image, password, email or even delete your accout.</p>
      <div className={classes.divider}></div>
      <h2>Profile image</h2>
      <p>Please, pick one image with one of the following extensions (.jpg, .png, .jpeg).</p>
      <ImageUpload
        onImageUpload={onImageUpload}
      />
      <div className={classes.divider}></div>
    </div>
  );
};

ProfileSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  onImageUpload: PropTypes.func.isRequired
};

export default withStyles(styles)(ProfileSettings);
