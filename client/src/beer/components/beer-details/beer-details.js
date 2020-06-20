import React from 'react';
import withStyles from 'react-jss';
import styles from './beer-details-styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const BeerDetails = (props) => {
  const { classes, name, tagline, description, image_url: imageURL } = props;
  return (
    <div className={classes.container}>
      <div className={classes.descriptionContainer}>
        <div className={classes.description}>
          <h1>{name}</h1>
          <p>{tagline}</p>
          <Button>Add to favourite</Button>
          <p>{description}</p>
        </div>
        <div className={classes.image}>
          <img src={imageURL} alt={name} title={name}/>
        </div>
      </div>
      <div className={classes.properties}>

      </div>
    </div>
  );
};

BeerDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export default withStyles(styles)(BeerDetails);
