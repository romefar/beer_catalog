import React, { Component } from 'react';
import ProfileSettings from '../components/profile-settings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProfileImage, changeProfilePassword, deleteProfile } from '../../redux/actions/profile-actions/profile-actions';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

class ProfileContainer extends Component {
  state = {
    isSuccessAlertOpen: false,
    isErrorAlertOpen: false,
    isModalVisible: false
  }

  componentDidUpdate = (prevProps) => {
    if (!isEqual(this.props.hasError, prevProps.hasError) && this.props.hasError && !this.state.isErrorAlertOpen) {
      this.setState({
        isErrorAlertOpen: true
      });
    }
    if (prevProps.actionCompletedSuccessfully !== this.props.actionCompletedSuccessfully && !this.state.isSuccessAlertOpen) {
      this.setState({
        isSuccessAlertOpen: true
      });
    }
  }

  onModalOpenHandler = () => {
    this.setState({
      isModalVisible: true
    });
  }

  onDeleteProfileHandler = () => {
    this.props.deleteProfile();
    this.onModalCloseHandler();
  }

  onModalCloseHandler = () => {
    this.setState({
      isModalVisible: false
    });
  }

  onErrorAlertCloseHandler = () => {
    this.setState({
      isErrorAlertOpen: false
    });
  }

  onSuccessAlertCloseHandler = () => {
    this.setState({
      isSuccessAlertOpen: false
    });
  }

  onImageUploadHandler = (formData) => {
    this.props.updateProfileImage(formData);
  }

  onPasswordChangeHandler = (formData) => {
    this.props.changeProfilePassword(formData);
  }

  render = () => {
    const { hasError } = this.props;
    const { isErrorAlertOpen, isSuccessAlertOpen, isModalVisible } = this.state;
    return (
      <ProfileSettings
        isSuccessOpen={isSuccessAlertOpen}
        isErrorOpen={isErrorAlertOpen}
        onErrorAlertClose={this.onErrorAlertCloseHandler}
        onSuccessAlertClose={this.onSuccessAlertCloseHandler}
        hasError={hasError}
        onImageUpload={this.onImageUploadHandler}
        onPasswordChange={this.onPasswordChangeHandler}
        isModalVisible={isModalVisible}
        onModalOpen={this.onModalOpenHandler}
        onModalClose={this.onModalCloseHandler}
        onDeleteProfile={this.onDeleteProfileHandler}
      />
    );
  }
}

const mapStateToProps = ({
  profile: { hasError, actionCompletedSuccessfully }
}) => {
  return {
    hasError,
    actionCompletedSuccessfully
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateProfileImage,
    changeProfilePassword,
    deleteProfile
  }, dispatch);
};

ProfileContainer.propTypes = {
  hasError: PropTypes.object,
  updateProfileImage: PropTypes.func.isRequired,
  changeProfilePassword: PropTypes.func.isRequired,
  actionCompletedSuccessfully: PropTypes.bool.isRequired,
  deleteProfile: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
