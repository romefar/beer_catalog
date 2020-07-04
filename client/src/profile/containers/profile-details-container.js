import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProfileData } from '../../redux/actions/profile-actions/profile-actions';
import ProfileDetails from '../components/profile-details';
import PropTypes from 'prop-types';

class ProflieDetailsContainer extends PureComponent {
  componentDidMount = () => {
    this.props.fetchProfileData();
  }

  render = () => {
    const { isLoading, hasError, profileData } = this.props;
    return (
      <ProfileDetails
        isLoading={isLoading}
        hasError={hasError}
        profileData={profileData}
      />
    );
  }
}

const mapStateToProps = ({
  profile: { hasError, isLoading, profileData }
}) => {
  return {
    hasError,
    isLoading,
    profileData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProfileData
  }, dispatch);
};

ProflieDetailsContainer.propTypes = {
  hasError: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  profileData: PropTypes.object.isRequired,
  fetchProfileData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProflieDetailsContainer);
