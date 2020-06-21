import React, { Fragment } from 'react';
import withStyles from 'react-jss';
import styles from './beer-details-styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../../shared/components/ui-elements/loading-spinner';
import MessageBox from '../../../shared/components/ui-elements/message-box';
import BeerPropertyItem from '../beer-property-item';
import List from '../../../shared/components/list';
import { v4 as uuidv4 } from 'uuid';
import parseIngredients from '../../../utils/parseIngredients';
import parseBrewMethods from '../../../utils/parseBrewMethods';
import BeerBrewItem from '../beer-brew-item';

const BeerDescription = (props) => {
  const { classes } = props;
  const {
    name,
    tagline,
    description,
    image_url: imageURL,
    abv,
    ibu,
    ebc,
    food_pairing: foodPairing,
    brewers_tips: brewersTips,
    ingredients,
    method,
    boil_volume: boilVolume
  } = props.item;

  const propertiesItems = [
    <BeerPropertyItem key={uuidv4()} name="ABV" title="Alcohol By Volume" value={abv} />,
    <BeerPropertyItem key={uuidv4()} name="IBU" title="International Bitterness Units" value={ibu} />,
    <BeerPropertyItem key={uuidv4()} name="EBC" title="European Brewery Convention" value={ebc} />
  ];

  const brewIngredients = parseIngredients(ingredients, boilVolume);
  const brewIngredientsItems = brewIngredients.map(item => {
    return <BeerBrewItem key={uuidv4()} item={item}/>;
  });

  const brewMethods = parseBrewMethods(method);
  const brewMethodsItems = brewMethods.map(item => {
    return <BeerBrewItem key={uuidv4()} item={item}/>;
  });

  return (
    <div className={classes.container}>
      <div className={classes.descriptionContainer}>
        <div className={classes.beerDescriptionSection}>
          <h1>{name}</h1>
          <p className={classes.tagline}>{tagline}</p>
          <Button variant="contained" color="primary" >Add to favourite</Button>
          <p className={classes.description}>{description}</p>
        </div>
        <div className={classes.image}>
          <img src={imageURL} alt={name} title={name}/>
        </div>
      </div>
      <div className={classes.properties}>
        <List items={propertiesItems} title="Properties"/>
        <List items={foodPairing} title="Food pairing"/>
      </div>
      <h2 className={classes.subTitle}>Brewing</h2>
      <p className={classes.description}>{brewersTips}</p>
      <div className={classes.brewingDescriptionSection}>
        <List items={brewIngredientsItems} title="Ingredients"/>
        <List items={brewMethodsItems} title="Method"/>
      </div>
    </div>
  );
};

BeerDescription.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.object.isRequired
};

const BeerDetails = (props) => {
  const { classes, isLoading, hasError, item } = props;
  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {hasError && <MessageBox text="An error was occured."/>}
      {item &&
      <BeerDescription
        classes={classes}
        item={item}
      />}
    </Fragment>
  );
};

BeerDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  item: PropTypes.object,
  hasError: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BeerDetails);
