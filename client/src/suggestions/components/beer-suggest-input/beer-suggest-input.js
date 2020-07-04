import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './beer-suggest-input-styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const beerTypes = [
  { title: 'American Ale' },
  { title: 'Pilsen Lager' },
  { title: 'French Saison' },
  { title: 'Belgian Ardennes' },
  { title: 'German Wheat' },
  { title: 'Bavarian Wheat' },
  { title: 'Monastery Ale' },
  { title: 'American Wheat' },
  { title: 'Super High Gravity Ale' },
  { title: 'Trappist High Gravity' },
  { title: 'Belgian Witbier' },
  { title: 'Belgian Saison' },
  { title: 'Belgian Strong Ale' },
  { title: 'Bohemian Lager' },
  { title: 'Vermont Ale' },
  { title: 'Bohemian Lager' },
  { title: 'London Ale Saflager' }
];

const BeerSuggestInput = ({ classes, value, onInputChange, onSubmit }) => {
  return (
    <div className={classes.container}>
      <h2>Let us know your yeast preferences</h2>
      <form className={classes.searchForm} onSubmit={onSubmit}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          className={classes.searchInput}
          options={beerTypes.map((option) => option.title)}
          size="small"
          value={value}
          onInputChange={onInputChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search by yeast"
              placeholder="Input yeast name..."
              margin="normal"
              variant="outlined" />
          )}
        />
        <IconButton onClick={onSubmit}>
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
};

BeerSuggestInput.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(BeerSuggestInput);
