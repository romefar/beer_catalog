import React, { Fragment } from 'react';
import withStyles from 'react-jss';
import styles from './beer-brew-item-styles';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const BeerBrewItem = (props) => {
  const { item, classes } = props;
  return (
    <Fragment>
      <h4 className={classes.title}>{item.title}</h4>
      {item.data.map(item => {
        return (
          <span className={classes.item} key={uuidv4()}>{item}</span>
        );
      })}
    </Fragment>
  );
};

BeerBrewItem.propTypes = {
  item: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BeerBrewItem);
