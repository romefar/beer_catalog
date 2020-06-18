import React, { PureComponent } from 'react';
import withStyles from 'react-jss';
import styles from './search-bar-styles';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { searchQueryChanged } from '../../redux/actions/search-actions/search-actions';

class SearchBar extends PureComponent {
  state = {
    query: ''
  }

  onChangeHandler =(e) => {
    this.setState({
      query: e.target.value
    });
  }

  render = () => {
    const { classes, searchQuery, searchQueryChanged } = this.props;
    return (
      <div className={classes.inputContainer}>
        <input className={classes.inputField} type='text' placeholder='Search query...' value={this.state.query} onChange={this.onChangeHandler}/>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  searchQuery: PropTypes.string.isRequired,
  searchQueryChanged: PropTypes.func.isRequired
};

const mapStateToProps = ({ search: { searchQuery } }) => {
  return {
    searchQuery
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchQueryChanged
  }, dispatch);
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(SearchBar);
