import React from 'react';
import withStyles from 'react-jss';
import styles from './beer-property-item-styles';
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PropTypes from 'prop-types';

const BeerPropertyItem = (props) => {
  const { classes, title, value, name } = props;
  return (
    <div className={classes.container}>
      <span className={classes.title}>
        <span>{name}</span>
        <Tooltip title={title}>
          <InfoOutlinedIcon color="action"/>
        </Tooltip>
      </span>
      <span className={classes.value}>
        {value}
      </span>
    </div>
  );
};

BeerPropertyItem.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default withStyles(styles)(BeerPropertyItem);
