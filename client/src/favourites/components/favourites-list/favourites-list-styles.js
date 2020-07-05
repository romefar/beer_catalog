const styles = theme => ({
  favouritesListContainer: {
    width: '60vw',
    maxWidth: '1200px',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    color: theme.textColor
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  '@media (max-width: 910px)': {
    favouritesListContainer: {
      width: '80vw'
    }
  }
});

export default styles;
