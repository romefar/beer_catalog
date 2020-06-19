import React, { PureComponent } from 'react';
import withStyles from 'react-jss';
import styles from './search-bar-styles';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { searchQueryChanged } from '../../redux/actions/search-actions/search-actions';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import validateSearchQuery from '../../utils/validate-search-query';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';

class SearchBar extends PureComponent {
  state = {
    query: '',
    isValid: true,
    isTouched: false
  }

  onChangeHandler = (e) => {
    const value = e.target.value;
    const [isValid] = validateSearchQuery(value);
    this.setState({
      query: value,
      isValid
    });
  }

  onFocusHandler = () => {
    this.setState({
      isTouched: true
    });
  }

  onSubmitHandler = (e) => {
    const { isValid, query } = this.state;
    const { searchQuery } = this.props;
    e.preventDefault();
    const [, validQuery] = validateSearchQuery(query);
    console.log(isValid, validQuery, searchQuery);
    if (isValid && validQuery !== searchQuery) {
      this.props.searchQueryChanged(validQuery);
    }
  }

  render = () => {
    const { classes } = this.props;
    const { isValid, isTouched, query } = this.state;
    return (
      <div className={classes.inputContainer}>
        <form className={classes.searchForm} onSubmit={this.onSubmitHandler}>
          <Tooltip
            title="Please, provide a valid beer name. For example 'Alphine Blue' "
            arrow
            open={!isValid && isTouched}
          >
            <input
              className={clsx(
                classes.inputField,
                {
                  [classes.inputFieldInvalid]: !isValid && isTouched
                }
              )}
              type='text'
              placeholder='Search query...'
              value={query}
              onChange={this.onChangeHandler}
              onFocus={this.onFocusHandler}/>
          </Tooltip>
          <IconButton onClick={this.onSubmitHandler}>
            <SearchIcon fontSize="large"/>
          </IconButton>
        </form>
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
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(SearchBar);
