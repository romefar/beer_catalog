import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchBeerItems } from '../../redux/actions/beer-list-actions/beer-list-actions';
// import BeerFilterList from '../components/beer-filter-list';
import InfiniteScroll from '../../shared/components/infinite-scroll';
import debounce from 'lodash.debounce';
import SearchBar from '../../search/search-bar';
import {
  ALCOHOL_VOLUME as ALC,
  INERNATIONAL_BITTERNESS_UNITS as IBU,
  COLOR_BY_EBC as CBE
} from '../components/beer-filter-list/beer-filters-types';

class BeerContainer extends Component {
  state = {
    filters: {
      [ALC.NAME]: ALC.MIN_VALUE,
      [IBU.NAME]: IBU.MIN_VALUE,
      [CBE.NAME]: CBE.MIN_VALUE
    },
    filterVisible: false
  }

  onFilterChangeHandler = debounce((key, val) => {
    this.setState((state) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          [key]: val

        }
      };
    });
  }, 100)

  render = () => {
    const { items, hasError, isLoading, fetchBeerItems, hasItems } = this.props;
    return (
      <Fragment>
        <SearchBar />
        <InfiniteScroll
          fetchItems={fetchBeerItems}
          isLoading={isLoading}
          hasError={hasError}
          items={items}
          hasItems={hasItems}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ beerList: { items, hasError, isLoading, hasItems } }) => {
  return {
    items,
    hasError,
    hasItems,
    isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBeerItems
  }, dispatch);
};

BeerContainer.propTypes = {
  items: PropTypes.array.isRequired,
  hasError: PropTypes.object,
  hasItems: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchBeerItems: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerContainer);
