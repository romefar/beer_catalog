import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { socketSendMessage, socketConnect, socketDisconnect, socketGetNewMessages } from '../../redux/actions/comments-actions/comments-actions';
import CommentForm from '../components/comment-form';

class CommentsContainer extends Component {
  #socket;

  componentDidMount = () => {
    this.props.socketConnect();
    this.props.socketGetNewMessages(this.onChangeHandler);
  }

  onChangeHandler = (obj) => {
    console.log(obj)
  }

  onClickHandler = () => {
    this.props.socketSendMessage({ id: 5, name: 'John', description: '888888'});
  }

  componentWillUnmount = () => {
    this.props.socketDisconnect();
  }

  render = () => {
    return (
      <Fragment>
        <p>Hello</p>
        <button onClick={this.onClickHandler}>
        Click on me
        </button>
        <CommentForm hasError={this.props.hasError}/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  comments: { isSending, hasError, connected }
}) => {
  return {
    isSending,
    hasError,
    connected
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    socketSendMessage,
    socketConnect,
    socketGetNewMessages,
    socketDisconnect
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
