import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchBeerItems, beerListCleared } from '../../redux/actions/beer-list-actions/beer-list-actions';
import { addBeerToFavourites, removeBeerFromFavourites } from '../../redux/actions/profile-actions/profile-actions';
import BeerFilterList from '../components/beer-filter-list';
import InfiniteScroll from '../../shared/components/infinite-scroll';
import debounce from 'lodash.debounce';
import isEqual from 'lodash.isequal';
import SearchBar from '../../search/search-bar';
import ExpandPanel from '../../shared/components/expand-panel';

class BeerContainer extends Component {
  state = {
    filters: {
      alcoholVolume: null,
      bitternetsUnits: null,
      ebcColor: null
    }
  }

  toggleFavourites = (id) => {
    if (this.props.favourites.map(item => item.beerId).includes(id)) {
      this.props.removeBeerFromFavourites(id);
    } else {
      this.props.addBeerToFavourites(id);
    }
  }

  fetchItems = (options) => {
    const { fetchBeerItems } = this.props;
    fetchBeerItems(options);
  }

  onFilterClose = () => {
    this.setState({
      filters: {
        alcoholVolume: null,
        bitternetsUnits: null,
        ebcColor: null
      }
    });
  }

  componentWillUnmount = () => {
    this.props.beerListCleared();
  }

  onFilterChangeHandler = debounce((key, val) => {
    const hasChanged = isEqual(this.state.filters, {
      ...this.state.filters,
      [key]: val
    });
    if (!hasChanged) {
      this.props.beerListCleared();
      this.setState((state) => {
        return {
          filters: {
            ...state.filters,
            [key]: val
          }
        };
      });
    }
  }, 300)

  render = () => {
    const { items, hasError, isLoading, isLoggedIn, hasItems, searchQuery, favourites } = this.props;
    const options = {
      searchQuery,
      ...this.state.filters
    };
    return (
      <Fragment>
        <SearchBar />
        <ExpandPanel>
          <BeerFilterList
            onChangeCommitted={this.onFilterChangeHandler}
          />
        </ExpandPanel>
        <InfiniteScroll
          fetchItems={this.fetchItems}
          isLoading={isLoading}
          hasError={hasError}
          favourites={favourites}
          onFavouriteClick={this.toggleFavourites}
          isLoggedIn={isLoggedIn}
          items={items}
          hasItems={hasItems}
          options={options}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  beerList: { items, hasError, isLoading, hasItems },
  signIn: { isLoggedIn },
  profile: { favourites },
  search: { searchQuery }
}) => {
  return {
    items,
    hasError,
    isLoggedIn,
    favourites,
    hasItems,
    isLoading,
    searchQuery
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBeerItems,
    addBeerToFavourites,
    removeBeerFromFavourites,
    beerListCleared
  }, dispatch);
};

BeerContainer.propTypes = {
  items: PropTypes.array.isRequired,
  hasError: PropTypes.object,
  hasItems: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  favourites: PropTypes.array.isRequired,
  fetchBeerItems: PropTypes.func.isRequired,
  removeBeerFromFavourites: PropTypes.func.isRequired,
  addBeerToFavourites: PropTypes.func.isRequired,
  beerListCleared: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerContainer);
