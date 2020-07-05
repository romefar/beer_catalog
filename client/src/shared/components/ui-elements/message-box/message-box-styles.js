const styles = theme => ({
  header: {
    fontFamily: `Helvetica, ${theme.defaultFontStack}`,
    margin: '10px 0'
  },
  container: {
    width: '40vw',
    maxWidth: '768px',
    margin: '20px auto',
    textAlign: 'center',
    '& a': {
      fontFamily: `Helvetica, ${theme.defaultFontStack}`,
      color: '#696969'
    }
  }
});

export default styles;
