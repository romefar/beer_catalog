const styles = {
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
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
  info: {
    textAlign: 'justify',
    width: '85%'
  },
  title: {
    margin: '3px 0',
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
  tagline: {
    margin: '0 0 9px 0',
    color: '#808080',
    fontFamily: 'Lato, Arial, sans-serif',
    fontStyle: 'italic'
  },
  actions: {
    borderTop: '1px solid #ccc',
    display: 'flex',
    padding: '5px 0 0 0'
  },
  description: {
    margin: '10px 0',
    color: '#696969',
    fontFamily: 'Lato, Arial, sans-serif'
  },
  cardContent: {
    width: '100%',
    display: 'flex',
    marginBottom: '20px',
    transition: 'all 0.5s ease-in'
  }
};

export default styles;
