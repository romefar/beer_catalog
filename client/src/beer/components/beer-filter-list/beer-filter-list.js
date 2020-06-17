import React, { memo } from 'react';
import withStyles from 'react-jss';
import styles from './beer-filter-list-styles';
import PropTypes from 'prop-types';
import BeerFilterItem from '../beer-filter-item';
import { v4 as uuidv4 } from 'uuid';
import {
  ALCOHOL_VOLUME as ALC,
  INERNATIONAL_BITTERNESS_UNITS as IBU,
  COLOR_BY_EBC as CBE
} from './beer-filters-types';

const BeerFilterList = ({ classes, onChangeCommitted }) => {
  const filters = [ALC, IBU, CBE];
  return (
    <div className={classes.filtersContainer}>
      <h2>Advanced search options</h2>
      {filters.map(filterType => {
        const key = uuidv4();
        return (
          <BeerFilterItem
            key={key}
            filterType={filterType}
            onChangeCommitted={onChangeCommitted}
          />
        );
      })}
    </div>
  );
};

BeerFilterList.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeCommitted: PropTypes.func.isRequired
};

export default withStyles(styles)(memo(BeerFilterList));
