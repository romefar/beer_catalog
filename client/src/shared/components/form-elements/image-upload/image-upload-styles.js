const styles = {
  imageUploadPreview: {
    width: '13rem',
    height: '13rem',
    border: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '1rem',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    '& img': {
      width: '100%',
      borderRadius: '50%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  container: {
    '& button': {
      margin: '0 10px 10px 0'
    }
  }
};

export default styles;
