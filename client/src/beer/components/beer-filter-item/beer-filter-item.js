import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './beer-filter-item-styles';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';

const BeerFilterItem = ({ classes, filterType, onChangeCommitted }) => {
  const { NAME, MIN_VALUE, MAX_VALUE, TITLE } = filterType;
  const [value, setValue] = useState(MIN_VALUE);
  return (
    <div className={classes.filterRow}>
      <div className={classes.filterInfo}>
        <span className={classes.filterTitle}>{TITLE}</span>
        <span className={classes.filterValueLabel}>{value}</span>
      </div>
      <div className={classes.sliderContainer}>
        <Slider
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={value}
          onChange={(e, val) => setValue(val)}
          valueLabelDisplay='auto'
          onChangeCommitted={(e, val) => onChangeCommitted(NAME, val)}
        />
      </div>
    </div>
  );
};

BeerFilterItem.propTypes = {
  classes: PropTypes.object.isRequired,
  filterType: PropTypes.object.isRequired,
  onChangeCommitted: PropTypes.func.isRequired
};

export default withStyles(styles)(BeerFilterItem);
