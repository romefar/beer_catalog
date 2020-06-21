import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleBeer } from '../../redux/actions/beer-item-actions/beer-item-actions';
import { bindActionCreators } from 'redux';
import BeerDetails from '../components/beer-details';
import PropTypes from 'prop-types';

class BeerDetailsContainer extends Component {
  fetchItem = (options) => {
    this.props.fetchSingleBeer(options);
  }

  componentDidMount = () => {
    const { match: { params } } = this.props;
    this.fetchItem({ id: params.beerId });
  }

  render = () => {
    const { isLoading, hasError, item } = this.props;
    return (
      <BeerDetails
        isLoading={isLoading}
        hasError={hasError}
        item={item}
      />
    );
  }
}

const mapStateToProps = ({ beerDetails: { isLoading, hasError, item } }) => {
  return {
    isLoading,
    hasError,
    item
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSingleBeer
  }, dispatch);
};

BeerDetailsContainer.propTypes = {
  item: PropTypes.object,
  match: PropTypes.object.isRequired,
  hasError: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  fetchSingleBeer: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetailsContainer);
