import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchBeerItems, beerListCleared } from '../../redux/actions/beer-list-actions/beer-list-actions';
import BeerFilterList from '../components/beer-filter-list';
import InfiniteScroll from '../../shared/components/infinite-scroll';
import debounce from 'lodash.debounce';
import SearchBar from '../../search/search-bar';
import ExpandPanel from '../../shared/components/expand-panel';

class BeerContainer extends Component {
  state = {
    filters: {
      alcoholVolume: null,
      bitternetsUnits: null,
      ebcColor: null
    },
    filterVisible: false
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

  onFilterChangeHandler = debounce((key, val) => {
    this.props.beerListCleared();
    this.setState((state) => {
      return {
        filters: {
          ...state.filters,
          [key]: val
        }
      };
    });
  }, 100)

  render = () => {
    const { items, hasError, isLoading, hasItems, searchQuery } = this.props;
    const options = {
      searchQuery,
      ...this.state.filters
    };
    return (
      <Fragment>
        <SearchBar />
        <ExpandPanel>
          <BeerFilterList onChangeCommitted={this.onFilterChangeHandler} />
        </ExpandPanel>
        <InfiniteScroll
          fetchItems={this.fetchItems}
          isLoading={isLoading}
          hasError={hasError}
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
  search: { searchQuery }
}) => {
  return {
    items,
    hasError,
    hasItems,
    isLoading,
    searchQuery
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBeerItems,
    beerListCleared
  }, dispatch);
};

BeerContainer.propTypes = {
  items: PropTypes.array.isRequired,
  hasError: PropTypes.object,
  hasItems: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchBeerItems: PropTypes.func.isRequired,
  beerListCleared: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerContainer);
