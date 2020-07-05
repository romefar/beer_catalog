const styles = theme => ({
  container: {
    width: '60vw',
    maxWidth: '1150px',
    margin: '25px auto',
    padding: '25px',
    borderRadius: '40px',
    color: theme.textColor,
    background: theme.defaultBgColor,
    transition: 'background-color 0.5s ease-in'
  },
  descriptionContainer: {
    display: 'flex'
  },
  beerDescriptionSection: {
    width: '70%',
    '& h1': {
      margin: '3px 0',
      fontFamily: `Helvetica, ${theme.defaultFontStack}`
    }
  },
  brewingDescriptionSection: {
    display: 'flex',
    margin: '20px 0',
    justifyContent: 'start'
  },
  subTitle: {
    margin: 0,
    fontFamily: `Helvetica, ${theme.defaultFontStack}`
  },
  tagline: {
    margin: '0 0 9px 0',
    color: '#808080',
    fontFamily: `Lato, ${theme.defaultFontStack}`,
    fontStyle: 'italic'
  },
  description: {
    margin: '10px 0',
    color: '#696969',
    fontFamily: `Lato, ${theme.defaultFontStack}`
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
    justifyContent: 'start',
    flexWrap: 'wrap'
  },
  '@media (max-width: 768px)': {
    descriptionContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      width: '80vw',
      padding: '15px'
    },
    properties: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& div:first-child': {
        margin: '0 0 10px 0'
      },
      '& div:first-child li': {
        padding: '5px'
      }
    },
    brewingDescriptionSection: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& div:first-child': {
        margin: '0 0 10px 0'
      },
      '& div:first-child li': {
        padding: '5px'
      }
    },
    image: {
      height: '200px',
      width: '100%'
    }
  }
});

export default styles;
