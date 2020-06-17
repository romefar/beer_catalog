const styles = {
  imageContainer: {
    width: '100%',
    height: '200px',
    marginBottom: '10px',
    '& img': {
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  },
  info: {
    textAlign: 'justify'
  },
  title: {
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
  tagline: {
    margin: '10px 0',
    fontFamily: 'Verdana, Arial, sans-serif',
    color: '#696969'
  },
  actions: {
    borderTop: '1px solid #ccc',
    padding: '5px 0 0 0'
  },
  cardContent: {
    width: '320px',
    marginBottom: '20px',
    transition: 'all 0.5s ease-in',
    '&:hover': {
      transform: 'scale(1.05)',
      border: '1px solid black'
    }
  }
};

export default styles;
