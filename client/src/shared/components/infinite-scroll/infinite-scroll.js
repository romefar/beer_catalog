import React, { Component, Fragment } from 'react';
import debounce from 'lodash.debounce';
import BeerList from '../../../beer/components/beer-list';
import LoadingSpinner from '../ui-elements/loading-spinner';
import MessageBox from '../ui-elements/message-box';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

class InfiniteScroll extends Component {
  setWindowOnScrollHandler = () => {
    window.onscroll = debounce(() => {
      const windowInnerHeight = window.innerHeight;
      const documentScrollTop = document.documentElement.scrollTop;
      const documentOffsetHeight = document.documentElement.offsetHeight;

      if (windowInnerHeight + documentScrollTop === documentOffsetHeight) {
        if (!this.props.isLoading && this.props.hasItems) {
          this.props.fetchItems(this.props.options);
        }
      }
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile && windowInnerHeight + window.pageYOffset >= documentOffsetHeight - 50) {
        if (!this.props.isLoading && this.props.hasItems) {
          this.props.fetchItems(this.props.options);
        }
      }
    }, 100);
  }

  componentDidMount = () => {
    this.setWindowOnScrollHandler();
    this.props.fetchItems(this.props.options);
  }

  componentDidUpdate = (prevProps) => {
    if (!isEqual(prevProps.options, this.props.options)) {
      this.props.fetchItems(this.props.options);
    }
  }

  render = () => {
    const { items, isLoading, isLoggedIn, hasError, hasItems, favourites, onFavouriteClick } = this.props;
    return (
      <Fragment>
        <BeerList
          items={items}
          isLoggedIn={isLoggedIn}
          favourites={favourites}
          onFavouriteClick={onFavouriteClick}
        />
        {isLoading && hasItems && <LoadingSpinner />}
        {hasError && <MessageBox text={hasError.message} />}
        {!hasItems && <MessageBox text='Sorry. We are out of beer.' />}
      </Fragment>
    );
  }
}

InfiniteScroll.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  hasItems: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  fetchItems: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  favourites: PropTypes.array.isRequired,
  onFavouriteClick: PropTypes.func.isRequired
};

export default InfiniteScroll;
