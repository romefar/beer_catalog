import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeerSuggestions } from '../../redux/actions/beer-suggestions-actions/beer-suggestions-actions';
import { addBeerToFavourites, removeBeerFromFavourites } from '../../redux/actions/profile-actions/profile-actions';
import Pagination from '@material-ui/lab/Pagination';
import BeerSuggestionsList from '../components/beer-suggestions-list';
import PropTypes from 'prop-types';
import BeerSuggestInput from '../components/beer-suggest-input';

class BeerSuggestionsContainer extends PureComponent {
  state = {
    page: 1
  }

  toggleFavourites = (id) => {
    if (this.props.favourites.map(item => item.beerId).includes(id)) {
      this.props.removeBeerFromFavourites(id);
    } else {
      this.props.addBeerToFavourites(id);
    }
  }

  componentDidMount = () => {
    this.props.fetchBeerSuggestions(this.state.page);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.page !== prevState.page) {
      this.props.fetchBeerSuggestions(this.state.page);
    }
  }

  onPageChange = (e, page) => {
    this.setState({
      page
    });
  }

  render = () => {
    const { items, hasError, favourites, isSuggestAvailable, isLoading, pages } = this.props;
    return (
      <Fragment>
        <BeerSuggestInput />
        <BeerSuggestionsList
          items={items}
          hasError={hasError}
          onFavouriteClick={this.toggleFavourites}
          favourites={favourites}
          isLoading={isLoading}
          isSuggestAvailable={isSuggestAvailable}
          paginationElement={
            <Pagination count={pages} page={this.state.page} onChange={this.onPageChange}/>
          }
        />
      </Fragment>

    );
  }
}

const mapStateToProps = ({
  beerSuggestions: { isLoading, hasError, isSuggestAvailable, items, pages },
  profile: { favourites }
}) => {
  return {
    isLoading,
    hasError,
    isSuggestAvailable,
    items,
    pages,
    favourites
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBeerSuggestions,
    addBeerToFavourites,
    removeBeerFromFavourites
  }, dispatch);
};

BeerSuggestionsContainer.propTypes = {
  items: PropTypes.array.isRequired,
  hasError: PropTypes.object,
  isSuggestAvailable: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  pages: PropTypes.number.isRequired,
  favourites: PropTypes.array.isRequired,
  fetchBeerSuggestions: PropTypes.func.isRequired,
  removeBeerFromFavourites: PropTypes.func.isRequired,
  addBeerToFavourites: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerSuggestionsContainer);
