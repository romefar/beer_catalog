import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../shared/components/ui-elements/card';
import styles from './beer-item-style';
import withStyles from 'react-jss';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom'; 

const BeerItem = ({ id, classes, imageUrl, name, tagline }) => {
  return (
    <Card className={classes.cardContent}>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt={name} title={name}/>
      </div>
      <div className={classes.info}>
        <h2 className={classes.title} title={name}>{name}</h2>
        <p className={classes.tagline}>{tagline}</p>
      </div>
      <div className={classes.actions}>
        <Button component={RouterLink} to={`/beer/${id}`}>View</Button>
        <Button>Add to favourite</Button>
      </div>
    </Card>
  );
};

BeerItem.propTypes = {
  id: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
};

export default withStyles(styles)(BeerItem);
