import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './comments-filter-styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { FILTER_BY_DATE_ASC, FILTER_BY_DATE_DESC, FILTER_BY_USER } from '../../constants/constants';

const CommentsFilter = ({ classes, onSelectChange }) => {
  return (
    <div className={classes.filterContainer}>
      <FormControl>
        <InputLabel htmlFor="comments-filter">Filter</InputLabel>
        <Select
          labelId="comments-filter"
          id="demo-simple-select"
          defaultValue={FILTER_BY_DATE_DESC}
          onChange={onSelectChange}
        >
          <MenuItem value={FILTER_BY_DATE_DESC}>Date (oldest)</MenuItem>
          <MenuItem value={FILTER_BY_DATE_ASC}>Date (recent)</MenuItem>
          <MenuItem value={FILTER_BY_USER}>Mine comments</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

CommentsFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelectChange: PropTypes.func.isRequired
};

export default withStyles(styles)(CommentsFilter);
