const styles = theme => ({
  header: {
    height: '60px',
    backgroundColor: theme.headerColor,
    padding: '0 10px',
    color: theme.textColor,
    '& h1': {
      margin: 0
    }
  },
  container: {
    maxWidth: '1900px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto'
  }
});

export default styles;
