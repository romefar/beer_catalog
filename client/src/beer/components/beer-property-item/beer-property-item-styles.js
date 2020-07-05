const styles = theme => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      margin: '0 8px 0 0'
    },
    '& svg': {
      color: theme.svgIconsColor
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  value: {
    margin: '0 0 0 8vw',
    borderRadius: '30px',
    color: 'white',
    backgroundColor: 'gray',
    padding: '6px',
    fontWeight: 'bold'
  }
});

export default styles;
