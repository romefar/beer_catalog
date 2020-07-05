const styles = theme => ({
  container: {
    width: '50vw',
    maxWidth: '960px',
    margin: '0 auto',
    color: theme.textColor,
    fontFamily: theme.defaultFontStack,
    '& h3': {
      textAlign: 'left',
      margin: '0 0 15px 0'
    }
  },
  updateButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0'
  },
  linkContainer: {
    textAlign: 'center',
    margin: '0 0 30px 0'
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'inherit',
    color: '#1273eb'
  }
});

export default styles;
