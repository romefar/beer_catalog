import React, { Fragment } from 'react';
import withStyles from 'react-jss';
import styles from './beer-rating-styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';

const BeerRating = (props) => {
  const {
    classes, rating, ratingError, isLoggedIn,
    decremented, incremented,
    onIncrement, onDecrement
  } = props;
  const removeButton = (
    <IconButton
      color="secondary"
      disabled={decremented}
      onClick={onDecrement}
    >
      <RemoveIcon fontSize="large"/>
    </IconButton>
  );
  const addButton = (
    <IconButton
      color="primary"
      disabled={incremented}
      onClick={onIncrement}
    >
      <AddIcon fontSize="large"/>
    </IconButton>
  );
  return (
    <Fragment>
      <div className={classes.container}>
        <h2>Rating:</h2>
        {isLoggedIn && removeButton}
        <div className={classes.counter}>
          {rating}
        </div>
        {isLoggedIn && addButton}
      </div>
      {ratingError && isLoggedIn && <p className={classes.error}>{ratingError.message}</p>}
    </Fragment>
  );
};

BeerRating.propTypes = {
  classes: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  ratingError: PropTypes.object,
  isLoggedIn: PropTypes.bool.isRequired,
  decremented: PropTypes.bool.isRequired,
  incremented: PropTypes.bool.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default withStyles(styles)(BeerRating);
