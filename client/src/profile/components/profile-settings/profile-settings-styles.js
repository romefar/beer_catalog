const styles = theme => ({
  container: {
    width: '50vw',
    margin: '20px auto',
    padding: '25px',
    borderRadius: '40px',
    fontFamily: theme.defaultFontStack,
    backgroundColor: theme.defaultBgColor,
    color: theme.textColor,
    transition: 'background-color 0.5s ease-in',
    '& h1': {
      margin: '10px 0'
    },
    '& p': {
      margin: '0 0 10px 0'
    },
    '& label': {
      textTransform: 'none'
    },
    '& label::firs-letter': {
      textTransform: 'uppercase'
    }
  },
  formContainer: {
    width: '80%',
    maxWidth: '500px'
  },
  divider: {
    height: '3px',
    backgroundColor: 'rgba(169,169,169, 0.8)',
    borderRadius: '10px',
    margin: '15px 0'
  },
  '@media (max-width: 768px)': {
    container: {
      width: '80vw'
    }
  }
});

export default styles;
