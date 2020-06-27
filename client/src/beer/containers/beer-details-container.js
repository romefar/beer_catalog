import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleBeer } from '../../redux/actions/beer-item-actions/beer-item-actions';
import { addBeerToFavourites, removeBeerFromFavourites } from '../../redux/actions/profile-actions/profile-actions';
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
  }

  render = () => {
    const { isLoading, hasError, item, isLoggedIn, favourites } = this.props;
    return (
      <BeerDetails
        isLoading={isLoading}
        hasError={hasError}
        item={item}
        favourites={favourites}
        onClick={this.toggleFavourites}
        isLoggedIn={isLoggedIn}
      />
    );
  }
}

const mapStateToProps = ({
  beerDetails: { isLoading, hasError, item },
  signIn: { isLoggedIn, userData },
  profile: { favourites }
}) => {
  return {
    isLoading,
    favourites,
    isLoggedIn,
    userData,
    hasError,
    item
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSingleBeer,
    addBeerToFavourites,
    removeBeerFromFavourites
  }, dispatch);
};

BeerDetailsContainer.propTypes = {
  item: PropTypes.object,
  match: PropTypes.object.isRequired,
  hasError: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  favourites: PropTypes.array.isRequired,
  userData: PropTypes.object,
  fetchSingleBeer: PropTypes.func.isRequired,
  removeBeerFromFavourites: PropTypes.func.isRequired,
  addBeerToFavourites: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetailsContainer);
