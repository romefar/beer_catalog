import React, { Component } from 'react';
import ProfileSettings from '../components/profile-settings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProfileImage } from '../../redux/actions/profile-actions/profile-actions';
import PropTypes from 'prop-types';

class ProfileContainer extends Component {
  onImageUploadHandler = (formData) => {
    this.props.updateProfileImage(formData);
  }

  render = () => {
    return (
      <ProfileSettings
        onImageUpload={this.onImageUploadHandler}
      />
    );
  }
}

const mapStateToProps = ({
  profile: { favourites }
}) => {
  return {
    favourites
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateProfileImage
  }, dispatch);
};

ProfileContainer.propTypes = {
  updateProfileImage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
