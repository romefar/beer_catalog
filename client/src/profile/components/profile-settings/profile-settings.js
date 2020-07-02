import React, { Fragment } from 'react';
import ImageUpload from '../../../shared/components/form-elements/image-upload';
import withStyles from 'react-jss';
import styles from './profile-settings-styles';
import PropTypes from 'prop-types';
import ChangePasswordForm from '../change-password-form';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '../../../shared/components/ui-elements/modal';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ProfileSettings = (props) => {
  const {
    classes, onImageUpload, onPasswordChange, hasError,
    onErrorAlertClose, onSuccessAlertClose, isErrorOpen, isSuccessOpen,
    isModalVisible, onModalOpen, onModalClose, onDeleteProfile
  } = props;

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

      <h2>Change password</h2>
      <p>Your password must be at least 8 characters long and cannot contain word &quot;password&quot;.</p>
      <div className={classes.formContainer}>
        <ChangePasswordForm
          onPasswordChange={onPasswordChange}
        />
      </div>

      <h2>Delete profile</h2>
      <p>To delete your profile click on the button below.</p>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={onModalOpen}
      >
        Delete profile
      </Button>

      <Snackbar
        open={isSuccessOpen}
        autoHideDuration={6000}
        onClose={onSuccessAlertClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert
          onClose={onSuccessAlertClose}
          severity="success"
        >
         Settings successfully updated!
        </Alert>
      </Snackbar>

      <Snackbar
        open={isErrorOpen}
        autoHideDuration={6000}
        onClose={onErrorAlertClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert
          onClose={onErrorAlertClose}
          severity="error"
        >
          {hasError && hasError.message}
        </Alert>
      </Snackbar>

      <Modal
        show={isModalVisible}
        onCancel={onModalClose}
        headerTitle="Are you sure?"
        footerContent={
          <Fragment>
            <Button
              onClick={onModalClose}
              variant="contained"
              color="secondary">
                Cancel
            </Button>
            <Button
              onClick={onDeleteProfile}
              variant="contained"
              color="primary">
                Delete
            </Button>
          </Fragment>
        }>
        <p>{`
          Do you REALLY want to delete your profile? Your comments won't 
          be deleted, so as your likes/dislikes.
          Please note that this action cannot be undone.`
        } </p>
      </Modal>
    </div>
  );
};

ProfileSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  isSuccessOpen: PropTypes.bool.isRequired,
  isErrorOpen: PropTypes.bool.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  onAlertClose: PropTypes.func.isRequired,
  onModalOpen: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onDeleteProfile: PropTypes.func.isRequired,
  hasError: PropTypes.object,
  onImageUpload: PropTypes.func.isRequired,
  onErrorAlertClose: PropTypes.func.isRequired,
  onSuccessAlertClose: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired
};

export default withStyles(styles)(ProfileSettings);
