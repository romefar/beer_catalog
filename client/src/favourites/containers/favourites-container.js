import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { removeBeerFromFavourites } from '../../redux/actions/profile-actions/profile-actions';
import { fetchBeerFavouritesItems } from '../../redux/actions/beer-favourites-actions/beer-favourites-actions';
import FavouritesList from '../components/favourites-list';
import Pagination from '@material-ui/lab/Pagination';

class FavouritesContainer extends PureComponent {
  state = {
    // TODO: Add cache for previous pages
    page: 1
  }

  componentDidMount = () => {
    this.props.fetchBeerFavouritesItems(this.state.page);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.page !== prevState.page) {
      this.props.fetchBeerFavouritesItems(this.state.page);
    }
  }

  removeBeerFromFavourites = (id) => {
    this.props.removeBeerFromFavourites(id);
  }

  onChange = (e, page) => {
    this.setState({
      page
    });
  }

  render = () => {
    const { items, hasError, favourites, isLoading, pages } = this.props;
    return (
      <FavouritesList
        items={items}
        hasError={hasError}
        onFavouriteClick={this.removeBeerFromFavourites}
        favourites={favourites}
        isLoading={isLoading}
        paginationElement={
          <Pagination count={pages} page={this.state.page} onChange={this.onChange}/>
        }
      />
    );
  }
}

const mapStateToProps = ({
  beerFavourites: { items, hasError, isLoading, pages },
  profile: { favourites }
}) => {
  return {
    items,
    hasError,
    pages,
    favourites,
    isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBeerFavouritesItems,
    removeBeerFromFavourites
  }, dispatch);
};

FavouritesContainer.propTypes = {
  items: PropTypes.array.isRequired,
  hasError: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  pages: PropTypes.number.isRequired,
  favourites: PropTypes.array.isRequired,
  fetchBeerFavouritesItems: PropTypes.func.isRequired,
  removeBeerFromFavourites: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesContainer);
