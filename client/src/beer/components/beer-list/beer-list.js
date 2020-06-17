import React from 'react';
import BeerItem from '../beer-item';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './beer-list-style';

const BeerList = ({ classes, items }) => {
  return (
    <div className={classes.beerListContainer}>
      {items.map(beerItem => {
        return (
          <BeerItem
            key={beerItem.id}
            imageUrl={beerItem.image_url}
            name={beerItem.name}
            tagline={beerItem.tagline}
          />
        );
      })}
    </div>
  );
};

BeerList.propTypes = {
  items: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BeerList);
