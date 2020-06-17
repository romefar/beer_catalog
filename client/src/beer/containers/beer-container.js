import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchBeerItems } from '../../redux/actions/beer-list-actions/beer-list-actions';
import BeerList from '../components/beer-list';
import LoadingSpinner from '../../shared/components/ui-elements/loading-spinner';
import BeerFilterList from '../components/beer-filter-list';
import debounce from 'lodash.debounce';
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

  componentDidMount = () => {
    const { fetchBeerItems } = this.props;
    console.log('mounted');
    fetchBeerItems();
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
    const { items, hasError, isLoading } = this.props;
    console.log(this.state);
    return (
      <Fragment>
        <BeerFilterList onChangeCommitted={this.onFilterChangeHandler}/>
        {isLoading && <LoadingSpinner />}
        {hasError && <h1>error was occured</h1>}
        {items.length > 0 && <BeerList items={items } />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ beerList: { items, hasError, isLoading } }) => {
  return {
    items,
    hasError,
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
  isLoading: PropTypes.bool.isRequired,
  fetchBeerItems: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerContainer);
