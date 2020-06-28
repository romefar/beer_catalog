import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../shared/components/ui-elements/card';
import styles from './favourites-item-styles';
import withStyles from 'react-jss';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { isFavourite as isBeerFavourite } from '../../../utils/isBeerFavourite';

const FavouritesItem = ({ id, classes, imageUrl, name, tagline, description, favourites, onFavouriteClick }) => {
  const isFavourite = isBeerFavourite(id, favourites);
  return (
    <Card className={classes.cardContent}>
      {isFavourite &&
      <Fragment>
        <div className={classes.info}>
          <h1 className={classes.title} title={name}>{name}</h1>
          <p className={classes.tagline}>{tagline}</p>
          <p className={classes.description}>{description}</p>
          <div className={classes.actions}>
            <Button component={RouterLink} to={`/beer/${id}`}>View</Button>
            <Button onClick={() => onFavouriteClick(id)}>
              {'Remove from favourite'}
            </Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={imageUrl} alt={name} title={name}/>
        </div>
      </Fragment>}
      {!isFavourite && <h2 className={classes.deletedTitle}>Beer item deleted.</h2>}
    </Card>
  );
};

FavouritesItem.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  favourites: PropTypes.array.isRequired,
  onFavouriteClick: PropTypes.func.isRequired
};

export default withStyles(styles)(FavouritesItem);
