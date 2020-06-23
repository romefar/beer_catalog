import React, { PureComponent, createRef } from 'react';
import withStyles from 'react-jss';
import styles from './settings-dropdown-styles';
import PropTypes from 'prop-types';

class SettingsDropdown extends PureComponent {
  node = createRef()

  componentDidMount = () => {
    document.addEventListener('mousedown', this.onClickHandler, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.onClickHandler, false);
  }

  onClickHandler = (e) => {
    // TODO: Find another approach
    if (!this.node.contains(e.target) && !this.props.containerNodeRef.contains(e.target)) {
      this.props.onClick();
    }
  }

  render = () => {
    return (
      <div
        className={this.props.classes.container}
        ref={node => { this.node = node; } }>
        <p>Test row №1</p>
        <p>Test row №2</p>
        <p>Test row №3</p>
        <p>Test row №4</p>
        <p>Test row №5</p>
        <p>Test row №6</p>
        <p>Test row №7</p>
        <p>Test row №8</p>
      </div>
    );
  }
};

SettingsDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  containerNodeRef: PropTypes.node.isRequired
};

export default withStyles(styles)(SettingsDropdown);
