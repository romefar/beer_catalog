const styles = {
  container: {
    width: '1000px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    '& span': {
      display: 'inline-block'
    },
    '& p': {
      margin: '10px 0'
    },
    '& p:first-child': {
      margin: '0 0 10,px 0'
    },
    '& p span:first-child': {
      fontWeight: 'bold',
      margin: '0 7px 0 0'
    }
  },
  info: {
    padding: '2px'
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0 20px 0'
  },
  imageContainer: {
    width: '150px',
    margin: '0 30px 0 0 ',
    '& img': {
      width: '100%',
      borderRadius: '50%'
    }
  }
};

export default styles;
