const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      transition: 'border-color 0.5s ease-in',
      display: 'block',
      border: '3px solid transparent',
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    '&:hover img': {
      borderColor: 'rgb(169, 112, 255);'
    }
  }
};

export default styles;
