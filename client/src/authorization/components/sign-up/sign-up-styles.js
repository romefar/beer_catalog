const styles = theme => ({
  container: {
    width: '576px',
    color: theme.textColor,
    margin: '0 auto',
    fontFamily: `Lato, ${theme.defaultFontStack}`
  },
  signUpForm: {
    width: '100%',
    border: `1px solid ${theme.formBorderColor}`,
    backgroundColor: theme.defaultBgColor,
    borderRadius: '5px',
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
  tips: {
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#5F7D95'
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
