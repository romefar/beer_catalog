import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchBeerItems } from '../../redux/actions/beer-list-actions/beer-list-actions';

class BeerContainer extends Component {
  componentDidMount = () => {
    const { fetchBeerItems } = this.props;
    console.log('mounted');
    // fetchBeerItems();
  }

  render = () => {
    const { items, hasError, isLoading } = this.props;
    console.log(isLoading);
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (hasError) {
      return <h1>Error</h1>;
    }
    console.log(items);
    return (
      <h1>Hello</h1>
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
