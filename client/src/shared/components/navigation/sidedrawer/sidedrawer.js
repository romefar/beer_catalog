import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import withStyles from 'react-jss';
import styles from './sidedrawer-styles';

const SideDrawer = ({ visible, onClick, children, classes }) => {
  const sideDrawer = (
    <CSSTransition
      in={visible}
      timeout={200}
      classNames={{
        enter: classes.slideInLeftEnter,
        enterActive: classes.slideInLeftEnterActive,
        exit: classes.slideInLeftExit,
        exitActive: classes.lideInLeftExitActive
      }}
      mountOnEnter
      unmountOnExit
    >
      <aside className={classes.sideDrawer} onClick={onClick}>{children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(sideDrawer, document.getElementById('drawer-hook'));
};

SideDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideDrawer);
