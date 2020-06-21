const styles = {
  container: {
    width: '70vw',
    margin: '0 auto',
    padding: '25px 0'
  },
  descriptionContainer: {
    display: 'flex'
  },
  beerDescriptionSection: {
    width: '70%',
    '& h1': {
      margin: '3px 0',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }
  },
  brewingDescriptionSection: {
    display: 'flex',
    margin: '20px 0',
    justifyContent: 'start'
  },
  subTitle: {
    margin: 0,
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
  tagline: {
    margin: '0 0 9px 0',
    color: '#808080',
    fontFamily: 'Lato, Arial, sans-serif',
    fontStyle: 'italic'
  },
  description: {
    margin: '10px 0',
    color: '#696969',
    fontFamily: 'Lato, Arial, sans-serif'
  },
  image: {
    width: '30%',
    height: '300px',
    '& img': {
      borderRadius: '30%',
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  },
  properties: {
    display: 'flex',
    margin: '20px 0',
    justifyContent: 'start'
  }
};

export default styles;
