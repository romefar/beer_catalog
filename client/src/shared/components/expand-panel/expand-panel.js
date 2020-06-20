import React, { PureComponent } from 'react';
import withStyles from 'react-jss';
import styles from './expand-panel-styles';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

class ExpandPanel extends PureComponent {
  state = {
    isOpen: false
  }

  onClickHandler = () => {
    this.setState((state) => {
      return {
        isOpen: !state.isOpen
      };
    });
  }

  render = () => {
    const { classes, children } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 onClick={this.onClickHandler}>Show filters</h2>
          <IconButton onClick={this.onClickHandler}>
            <ExpandMoreIcon style={{ transition: 'all 0.5s ease' }} className={clsx({
              [classes.iconChanged]: isOpen
            })}/>
          </IconButton>
        </div>
        <div className={clsx({
          [classes.content]: true
        })}>
          <AnimateHeight
            duration={500}
            height={isOpen ? 'auto' : 0}
          >
            <div className={classes.contentWrapper}>
              {children}
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}

ExpandPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any
};

ExpandPanel.defaultProps = {
  contentHeight: '200px'
};

export default withStyles(styles)(ExpandPanel);
