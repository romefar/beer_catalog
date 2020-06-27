import React from 'react';
import BeerItem from '../beer-item';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './beer-list-style';

const BeerList = ({ classes, items, isLoggedIn, favourites, onFavouriteClick }) => {
  return (
    <div id="beer_list_container" className={classes.beerListContainer}>
      {items.map(beerItem => {
        return (
          <BeerItem
            id={beerItem.id}
            key={beerItem.id}
            favourites={favourites}
            onFavouriteClick={onFavouriteClick}
            isLoggedIn={isLoggedIn}
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
  isLoggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  favourites: PropTypes.array.isRequired,
  onFavouriteClick: PropTypes.func.isRequired
};

export default withStyles(styles)(BeerList);
