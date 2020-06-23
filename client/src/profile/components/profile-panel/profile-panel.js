import React, { PureComponent, Fragment } from 'react';
import withStyles from 'react-jss';
import styles from './profile-panel-styles';
import PropTypes from 'prop-types';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Avatar from '../../../shared/components/ui-elements/avatar';
import SettingsDropdown from '../settings-dropdown';
import clsx from 'clsx';

class ProfilePanel extends PureComponent {
  state = {
    isDropdownVisible: false
  }

  containerNodeRef = React.createRef();

  onClickHandler = () => {
    this.setState(state => {
      return {
        isDropdownVisible: !state.isDropdownVisible
      };
    });
  }

  render = () => {
    const { classes } = this.props;
    const { isDropdownVisible } = this.state;
    return (
      <Fragment>
        <div ref={node => { this.containerNodeRef = node; }} className={classes.container} onClick={this.onClickHandler}>
          <ExpandMoreOutlinedIcon
            style={{ transition: 'transform 0.5s ease-in' }}
            className={clsx({
              [classes.expandIcon]: true,
              [classes.expandIconOpened]: isDropdownVisible
            })}/>
          <span className={classes.userName}>{'UserName'}</span>
          <div className={classes.profileImage}>
            <Avatar
              imageUrl="https://www.pinclipart.com/picdir/big/60-602450_profile-clipart-profile-icon-round-profile-pic-png.png"
              alt="title"
            />
          </div>
        </div>
        {isDropdownVisible && <SettingsDropdown containerNodeRef={this.containerNodeRef} onClick={this.onClickHandler}/>}
      </Fragment>
    );
  }
}

ProfilePanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePanel);
