import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeerSuggestions, fetchBeerSuggestionsByYeast } from '../../redux/actions/beer-suggestions-actions/beer-suggestions-actions';
import { addBeerToFavourites, removeBeerFromFavourites } from '../../redux/actions/profile-actions/profile-actions';
import Pagination from '@material-ui/lab/Pagination';
import BeerSuggestionsList from '../components/beer-suggestions-list';
import PropTypes from 'prop-types';
import BeerSuggestInput from '../components/beer-suggest-input';
import trim from '../../utils/trim';

class BeerSuggestionsContainer extends PureComponent {
  state = {
    page: 1,
    searchTerm: ''
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
    if (this.state.page !== prevState.page && !this.props.isYeastSuggestion) {
      this.props.fetchBeerSuggestions(this.state.page);
    } else if (this.state.page !== prevState.page && this.props.isYeastSuggestion) {
      this.props.fetchBeerSuggestionsByYeast(this.state.page, this.state.searchTerm);
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const searchTerm = trim(this.state.searchTerm);
    if (searchTerm) {
      this.setState({
        page: 1
      });
      this.props.fetchBeerSuggestionsByYeast(this.state.page, searchTerm);
    } else {
      this.setState({
        page: 1
      });
      this.props.fetchBeerSuggestions(this.state.page);
    }
  }

  onInputChangeHandler = (e, value) => {
    this.setState({
      searchTerm: value
    });
  }

  onPageChange = (e, page) => {
    this.setState({
      page
    });
  }

  render = () => {
    const {
      items, hasError, favourites, isSuggestAvailable,
      isEmpty, isYeastSuggestion, isLoading, pages
    } = this.props;

    return (
      <Fragment>
        <BeerSuggestInput
          value={this.state.searchTerm}
          onInputChange={this.onInputChangeHandler}
          onSubmit={this.onSubmitHandler}
        />
        <BeerSuggestionsList
          items={items}
          hasError={hasError}
          onFavouriteClick={this.toggleFavourites}
          favourites={favourites}
          isLoading={isLoading}
          isSuggestAvailable={isSuggestAvailable}
          isYeastSuggestion={isYeastSuggestion}
          isEmpty={isEmpty}
          paginationElement={
            <Pagination count={pages} page={this.state.page} onChange={this.onPageChange}/>
          }
        />
      </Fragment>

    );
  }
}

const mapStateToProps = ({
  beerSuggestions: { isLoading, hasError, isSuggestAvailable, isYeastSuggestion, isEmpty, items, pages },
  profile: { favourites }
}) => {
  return {
    isLoading,
    hasError,
    isSuggestAvailable,
    isEmpty,
    isYeastSuggestion,
    items,
    pages,
    favourites
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBeerSuggestions,
    addBeerToFavourites,
    fetchBeerSuggestionsByYeast,
    removeBeerFromFavourites
  }, dispatch);
};

BeerSuggestionsContainer.propTypes = {
  items: PropTypes.array.isRequired,
  hasError: PropTypes.object,
  isSuggestAvailable: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isYeastSuggestion: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  pages: PropTypes.number.isRequired,
  favourites: PropTypes.array.isRequired,
  fetchBeerSuggestions: PropTypes.func.isRequired,
  removeBeerFromFavourites: PropTypes.func.isRequired,
  addBeerToFavourites: PropTypes.func.isRequired,
  fetchBeerSuggestionsByYeast: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerSuggestionsContainer);
