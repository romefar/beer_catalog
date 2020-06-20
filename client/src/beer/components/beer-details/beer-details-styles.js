const styles = {
  container: {
    width: '80vw',
    margin: '0 auto'
  },
  descriptionContainer: {
    display: 'flex'
  },
  description: {
    width: '80%'
  },
  image: {
    width: '20%',
    '& img': {
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  },
  properties: {
    display: 'flex'
  }
};

export default styles;
