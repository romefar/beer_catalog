import React from 'react';
import withStyles from 'react-jss';
import styles from './profile-details-styles';
import Card from '../../../shared/components/ui-elements/card';
import LoadingSpinner from '../../../shared/components/ui-elements/loading-spinner';
import MessageBox from '../../../shared/components/ui-elements/message-box';
import dateFormatter from '../../../utils/dateFormatter';
import PropTypes from 'prop-types';
import hostHelper from '../../../utils/hostHelper';

const ProfileDetails = (props) => {
  const { classes, isLoading, hasError, profileData } = props;
  return (
    <div className={classes.container}>
      {isLoading && <LoadingSpinner />}
      {hasError && <MessageBox text={hasError.message}/>}
      {!isLoading && !hasError &&
        <Card className={classes.profileContainer}>
          <div className={classes.imageContainer}>
            <img src={`${hostHelper()}/${profileData.image}`} alt={profileData.name} title={profileData.name}/>
          </div>
          <div className={classes.info}>
            <p>
              <span>Name:</span>
              <span>{profileData.name}</span>
            </p>
            <p>
              <span>Email:</span>
              <span>{profileData.email}</span>
            </p>
            <p>
              <span>Favourites beer:</span>
              <span>{profileData.favourites}</span>
            </p>
            <p>
              <span>Comments:</span>
              <span>{profileData.comments}</span>
            </p>
            <p>
              <span>Registered:</span>
              <span>{dateFormatter(profileData.createdAt, 'LL')}</span>
            </p>
          </div>
        </Card>}
    </div>
  );
};

ProfileDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.object,
  profileData: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileDetails);
