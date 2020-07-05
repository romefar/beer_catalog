const styles = theme => ({
  container: {
    width: '576px',
    margin: '0 auto',
    color: theme.textColor,
    fontFamily: `Lato, ${theme.defaultFontStack}`
  },
  signUpForm: {
    width: '100%',
    border: `1px solid ${theme.formBorderColor}`,
    borderRadius: '5px',
    backgroundColor: theme.defaultBgColor,
    padding: '20px',
    margin: '50px 0'
  },
  title: {
    fontFamily: 'inherit',
    textAlign: 'center',
    margin: '10px 0'
  },
  errorMessage: {
    textAlign: 'center',
    borderRadius: '10px',
    backgroundColor: '#DC143C',
    padding: '10px',
    margin: '15px 0'
  },
  submitButton: {
    width: '100%'
  },
  linkContainer: {
    display: 'block',
    padding: '10px 0'
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'inherit',
    color: '#1273eb'
  },
  '@media (max-width: 768px)': {
    container: {
      width: '80vw'
    }
  }
});

export default styles;
