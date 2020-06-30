import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  socketSendMessage,
  socketConnect,
  socketDisconnect,
  socketSetNewMessageHandler,
  socketLoadInitialComments,
  getNewComment,
  socketDeleteComment,
  showNewComments
} from '../../redux/actions/comments-actions/comments-actions';
import CommentForm from '../components/comment-form';
import CommentsList from '../components/comments-list';
import PropTypes from 'prop-types';

class CommentsContainer extends Component {
  state = {
    isModalVisible: false,
    commentId: null
  }

  componentDidMount = () => {
    this.props.socketConnect();
    this.props.socketSetNewMessageHandler(this.props.getNewComment);
  }

  componentDidUpdate = () => {
    if (this.props.connected && !this.props.isLoading && this.props.isInitialLoad && !this.props.hasError) {
      this.props.socketLoadInitialComments(this.props.id);
    }
  }

  deleteCommentHandler = () => {
    this.props.socketDeleteComment(this.state.commentId, this.props.id);
    this.setState({
      isModalVisible: false
    });
  }

  showModalHandler = (id) => {
    this.setState({
      isModalVisible: true,
      commentId: id
    });
  }

  closeModalHandler = () => {
    this.setState({
      isModalVisible: false
    });
  }

  onClickHandler = () => {
    this.props.showNewComments();
  }

  componentWillUnmount = () => {
    this.props.socketDisconnect();
  }

  render = () => {
    const { isLoading, hasError, userData, isLoggedIn, items, hasNewComments } = this.props;
    return (
      <Fragment>
        {isLoggedIn &&
         <CommentForm
           hasError={this.props.hasError}
           onSubmit={this.props.socketSendMessage}
           id={this.props.id}
         />}
        <CommentsList
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          items={items}
          isModalVisible={this.state.isModalVisible}
          userData={userData}
          hasNewComments={hasNewComments}
          hasError={hasError}
          showModalHandler={this.showModalHandler}
          closeModalHandler={this.closeModalHandler}
          deleteCommentHandler={this.deleteCommentHandler}
          onUpdateClick={this.onClickHandler}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  comments: { hasError, items, isLoading, hasNewComments, connected, isInitialLoad },
  signIn: { userData, isLoggedIn }
}) => {
  return {
    items,
    userData,
    isLoading,
    isLoggedIn,
    hasNewComments,
    hasError,
    connected,
    isInitialLoad
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    socketSendMessage,
    socketConnect,
    socketSetNewMessageHandler,
    socketLoadInitialComments,
    socketDeleteComment,
    socketDisconnect,
    getNewComment,
    showNewComments
  }, dispatch);
};

CommentsContainer.propTypes = {
  id: PropTypes.number.isRequired,
  userData: PropTypes.object,
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isInitialLoad: PropTypes.bool.isRequired,
  hasNewComments: PropTypes.bool.isRequired,
  hasError: PropTypes.object,
  connected: PropTypes.bool.isRequired,
  socketSendMessage: PropTypes.func.isRequired,
  socketConnect: PropTypes.func.isRequired,
  socketSetNewMessageHandler: PropTypes.func.isRequired,
  socketLoadInitialComments: PropTypes.func.isRequired,
  socketDisconnect: PropTypes.func.isRequired,
  socketDeleteComment: PropTypes.func.isRequired,
  getNewComment: PropTypes.func.isRequired,
  showNewComments: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
