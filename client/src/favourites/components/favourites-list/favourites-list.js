import React from 'react';
import FavouritesItem from '../favourites-item';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './favourites-list-styles';
import LoadingSpinner from '../../../shared/components/ui-elements/loading-spinner';
import MessageBox from '../../../shared/components/ui-elements/message-box';
import { Link } from 'react-router-dom';

const FavouritesList = ({ classes, isLoading, hasError, items, favourites, onFavouriteClick, paginationElement }) => {
  return (
    <div className={classes.favouritesListContainer}>
      {isLoading && <LoadingSpinner />}
      {hasError && <MessageBox text={hasError.message} />}
      {items.length > 0 && items.map(beerItem => {
        return (
          <FavouritesItem
            id={beerItem.id}
            key={beerItem.id}
            favourites={favourites}
            onFavouriteClick={onFavouriteClick}
            description={beerItem.description}
            imageUrl={beerItem.image_url}
            name={beerItem.name}
            tagline={beerItem.tagline}
          />
        );
      })}
      {items.length === 0 && !isLoading &&
      <MessageBox text="You don't have favourites yet.">
        <Link to="/">
          Visit our page to discover new beer
        </Link>
      </MessageBox>}
      <div className={classes.paginationContainer}>
        {items.length > 0 && paginationElement}
      </div>
    </div>
  );
};

FavouritesList.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.object,
  items: PropTypes.array.isRequired,
  favourites: PropTypes.array.isRequired,
  onFavouriteClick: PropTypes.func.isRequired,
  paginationElement: PropTypes.object.isRequired
};

export default withStyles(styles)(FavouritesList);
