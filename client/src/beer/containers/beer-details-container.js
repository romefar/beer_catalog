import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleBeer } from '../../redux/actions/beer-item-actions/beer-item-actions';
import { addBeerToFavourites, removeBeerFromFavourites } from '../../redux/actions/profile-actions/profile-actions';
import { fetchRatingValueOnly, fetchRatingFull, incrementRating, decrementRating } from '../../redux/actions/rating-actions/rating-actions';
import { bindActionCreators } from 'redux';
import BeerDetails from '../components/beer-details';
import PropTypes from 'prop-types';

class BeerDetailsContainer extends Component {
  fetchItem = (options) => {
    this.props.fetchSingleBeer(options);
  }

  toggleFavourites = (id) => {
    if (this.props.favourites.map(item => item.beerId).includes(id)) {
      this.props.removeBeerFromFavourites(id);
    } else {
      this.props.addBeerToFavourites(id);
    }
  }

  componentDidMount = () => {
    const { match: { params } } = this.props;
    this.fetchItem({ id: params.beerId });
    if (this.props.isLoggedIn) {
      this.props.fetchRatingFull(params.beerId);
    } else {
      this.props.fetchRatingValueOnly(params.beerId);
    }
  }

  onIncrementRatingHandler = () => {
    this.props.incrementRating(this.props.match.params.beerId);
  }

  onDecrementRatingHandler = () => {
    this.props.decrementRating(this.props.match.params.beerId);
  }

  render = () => {
    const {
      isLoading, hasError, item, isLoggedIn, favourites,
      rating, ratingError, decremented, incremented
    } = this.props;
    return (
      <BeerDetails
        isLoading={isLoading}
        hasError={hasError}
        item={item}
        favourites={favourites}
        onClick={this.toggleFavourites}
        isLoggedIn={isLoggedIn}
        rating={rating}
        ratingError={ratingError}
        decremented={decremented}
        incremented={incremented}
        onIncrement={this.onIncrementRatingHandler}
        onDecrement={this.onDecrementRatingHandler}
      />
    );
  }
}

const mapStateToProps = ({
  beerDetails: { isLoading, hasError, item },
  signIn: { isLoggedIn, userData },
  profile: { favourites },
  rating: { rating, hasError: ratingError, decremented, incremented }
}) => {
  return {
    isLoading,
    favourites,
    isLoggedIn,
    userData,
    hasError,
    item,
    rating,
    ratingError,
    decremented,
    incremented
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSingleBeer,
    addBeerToFavourites,
    removeBeerFromFavourites,
    fetchRatingValueOnly,
    fetchRatingFull,
    incrementRating,
    decrementRating
  }, dispatch);
};

BeerDetailsContainer.propTypes = {
  item: PropTypes.object,
  match: PropTypes.object.isRequired,
  hasError: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  favourites: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  ratingError: PropTypes.object,
  decremented: PropTypes.bool.isRequired,
  incremented: PropTypes.bool.isRequired,
  userData: PropTypes.object,
  fetchSingleBeer: PropTypes.func.isRequired,
  removeBeerFromFavourites: PropTypes.func.isRequired,
  addBeerToFavourites: PropTypes.func.isRequired,
  fetchRating: PropTypes.func.isRequired,
  incrementRating: PropTypes.func.isRequired,
  decrementRating: PropTypes.func.isRequired,
  fetchRatingValueOnly: PropTypes.func.isRequired,
  fetchRatingFull: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetailsContainer);
