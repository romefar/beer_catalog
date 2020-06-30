import React, { Fragment } from 'react';
import styles from './comments-list-styles';
import withStyles from 'react-jss';
import LoadingSpinner from '../../../shared/components/ui-elements/loading-spinner';
import MessageBox from '../../../shared/components/ui-elements/message-box';
import CommentsItem from '../comments-item';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Modal from '../../../shared/components/ui-elements/modal';

const CommentsList = (props) => {
  const {
    classes, hasError, items, isLoading, isLoggedIn, userData, hasNewComments, isModalVisible,
    onUpdateClick, closeModalHandler, showModalHandler, deleteCommentHandler
  } = props;
  return (
    <div className={classes.container}>
      <Modal
        show={isModalVisible}
        onCancel={closeModalHandler}
        headerTitle="Are you sure?"
        footerContent={
          <Fragment>
            <Button
              onClick={closeModalHandler}
              variant="contained"
              color="secondary">
                Cancel
            </Button>
            <Button
              onClick={deleteCommentHandler}
              variant="contained"
              color="primary">
                Delete
            </Button>
          </Fragment>
        }>
        <p>Do you want to delete your comment? Please note that it cannot be undone. </p>
      </Modal>
      {isLoading && <LoadingSpinner />}
      {hasNewComments &&
        <div className={classes.updateButtonContainer}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<UpdateOutlinedIcon />}
            onClick={onUpdateClick}
          >
          Show new comments
          </Button>
        </div>
      }
      {hasError && <MessageBox text={hasError.message}/>}
      {items.length > 0 &&
        items.map(commentsItem => {
          return (
            <CommentsItem
              key={commentsItem._id}
              id={commentsItem._id}
              userName={commentsItem.creatorId.name}
              creatorId={commentsItem.creatorId._id}
              imageUrl={commentsItem.creatorId.image}
              comment={commentsItem.description}
              showModalHandler={showModalHandler}
              pubDate={commentsItem.createdAt}
              userData={userData}
              isLoggedIn={isLoggedIn}
            />
          );
        })
      }
    </div>
  );
};

CommentsList.propTypes = {
  classes: PropTypes.object.isRequired,
  hasError: PropTypes.object,
  items: PropTypes.array.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  userData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  hasNewComments: PropTypes.bool.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  showModalHandler: PropTypes.func.isRequired,
  deleteCommentHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(CommentsList);
