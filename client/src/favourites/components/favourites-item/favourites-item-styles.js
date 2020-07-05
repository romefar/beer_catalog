const styles = theme => ({
  imageContainer: {
    width: '15%',
    height: '200px',
    marginBottom: '10px',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  },
  deletedTitle: {
    margin: '50px auto',
    fontFamily: `Helvetica, ${theme.defaultFontStack}`
  },
  info: {
    textAlign: 'justify',
    width: '85%'
  },
  title: {
    margin: '3px 0',
    fontFamily: `Helvetica, ${theme.defaultFontStack}`
  },
  tagline: {
    margin: '0 0 9px 0',
    color: '#808080',
    fontFamily: `Lato, ${theme.defaultFontStack}`,
    fontStyle: 'italic'
  },
  actions: {
    borderTop: '1px solid #ccc',
    display: 'flex',
    padding: '5px 0 0 0',
    '& span': {
      color: theme.buttonTextColor
    }
  },
  description: {
    margin: '10px 0',
    color: '#696969',
    fontFamily: `Lato, ${theme.defaultFontStack}`
  },
  cardContent: {
    width: '100%',
    display: 'flex',
    marginBottom: '20px',
    transition: 'all 0.5s ease-in'
  },
  '@media (max-width: 768px)': {
    info: {
      width: '70%'
    },
    imageContainer: {
      width: '30%'
    }
  },
  '@media (max-width: 380px)': {
    imageContainer: {
      display: 'none'
    },
    info: {
      width: '100%'
    }
  }
});

export default styles;
