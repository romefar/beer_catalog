import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './modal-styles';
import withStyles from 'react-jss';
import Backdrop from '../backdrop';

const ModalOverlay = ({ headerTitle, classes, onSubmitHandler, footerContent, children }) => {
  const content = (
    <div className={classes.modal}>
      <header className={classes.modalHeader}>
        <h2>{headerTitle}</h2>
      </header>
      <form onSubmit={onSubmitHandler || (e => e.preventDefault())}>
        <div className={classes.modalContent}>
          {children}
        </div>
        <footer className={classes.modalFooter}>
          {footerContent}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  const { classes, onCancel, show } = props;
  return (
    <Fragment>
      {show && <Backdrop onClick={onCancel}/>}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={250}
        classNames={{
          enter: classes.modalEnter,
          enterActive: classes.modalEnterActive,
          exit: classes.modalExit,
          exitActive: classes.modalExitActive
        }}>
        <ModalOverlay {...props} />
      </CSSTransition>
    </Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  onCancel: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Modal);
