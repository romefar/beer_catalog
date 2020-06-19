import React, { Component, Fragment } from 'react';
import debounce from 'lodash.debounce';
import BeerList from '../../../beer/components/beer-list';
import LoadingSpinner from '../ui-elements/loading-spinner';
import MessageBox from '../ui-elements/message-box';
import PropTypes from 'prop-types';

class InfiniteScroll extends Component {
  setWindowOnScrollHandler = () => {
    window.onscroll = debounce(() => {
      const windowInnerHeight = window.innerHeight;
      const documentScrollTop = document.documentElement.scrollTop;
      const documentOffsetHeight = document.documentElement.offsetHeight;

      if (windowInnerHeight + documentScrollTop === documentOffsetHeight) {
        if (!this.props.isLoading && this.props.hasItems) {
          this.props.fetchItems(this.props.options.searchQuery);
        }
      }
      // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // if (isMobile && windowInnerHeight + window.pageYOffset >= documentOffsetHeight - 20) {
      //   if (!this.props.isLoading && !this.props.isEnd) {
      //     // this.props.fetchItems();
      //   }
      // }
    }, 100);
  }

  componentDidMount = () => {
    this.setWindowOnScrollHandler();
    this.props.fetchItems(this.props.options.searchQuery);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.options.searchQuery !== this.props.options.searchQuery) {
      this.props.fetchItems(this.props.options.searchQuery);
    }
  }

  render = () => {
    const { items, isLoading, hasError, hasItems } = this.props;
    return (
      <Fragment>
        <BeerList items={items}/>
        {isLoading && hasItems && <LoadingSpinner />}
        {hasError && <MessageBox text='Something went wrong.' />}
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
  fetchItems: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};

export default InfiniteScroll;
