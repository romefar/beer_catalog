const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    color: theme.textColor,
    fontFamily: theme.defaultFontStack,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    '& h2': {
      margin: '5px 0'
    }
  },
  counter: {
    margin: '0 7px'
  },
  error: {
    color: 'red',
    margin: 0
  }
});

export default styles;
