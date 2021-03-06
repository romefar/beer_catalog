import React from 'react';
import BeerSuggestionsItem from '../beer-suggestions-item';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './beer-suggestions-list-styles';
import LoadingSpinner from '../../../shared/components/ui-elements/loading-spinner';
import MessageBox from '../../../shared/components/ui-elements/message-box';
import { Link } from 'react-router-dom';

const BeerSuggestionsList = ({
  classes, isLoading, hasError, items, favourites,
  onFavouriteClick, paginationElement, isSuggestAvailable,
  isYeastSuggestion, isEmpty
}) => {
  return (
    <div className={classes.container}>
      {isLoading && <LoadingSpinner />}
      {hasError && <MessageBox text={hasError.message} />}
      {isSuggestAvailable && <h3>Beer suggestions based on your favourites</h3>}
      {items.length > 0 && !isLoading && items.map(beerItem => {
        return (
          <BeerSuggestionsItem
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
      {!isSuggestAvailable && !isYeastSuggestion && !isLoading &&
        <MessageBox text="We don't have enough data to suggest you beer. Add some beer to favourites to view suggestions.">
          <Link to="/">
            Disover new beer.
          </Link>
        </MessageBox>}
      {isEmpty && isYeastSuggestion && <MessageBox text="We didn't find anything. Try different yeast name." />}
      <div className={classes.paginationContainer}>
        {items.length > 0 && paginationElement}
      </div>
    </div>
  );
};

BeerSuggestionsList.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuggestAvailable: PropTypes.bool.isRequired,
  hasError: PropTypes.object,
  items: PropTypes.array.isRequired,
  isYeastSuggestion: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  favourites: PropTypes.array.isRequired,
  onFavouriteClick: PropTypes.func.isRequired,
  paginationElement: PropTypes.object.isRequired
};

export default withStyles(styles)(BeerSuggestionsList);
