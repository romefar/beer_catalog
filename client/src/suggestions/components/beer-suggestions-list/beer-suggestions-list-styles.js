const styles = theme => ({
  container: {
    width: '60vw',
    maxWidth: '1200px',
    margin: '20px auto',
    color: theme.textColor,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: `Verdana, ${theme.defaultFontStack}`,
    '& h3': {
      textAlign: 'center',
      margin: '0 0 15px 0'
    }
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& li button': {
      color: theme.textColor
    },
    '& li button.Mui-selected': {
      backgroundColor: theme.pageItemSelectedColor
    },
    '& li button.MuiPaginationItem-page:hover': {
      backgroundColor: theme.pageItemHoveredColor
    }
  }
});

export default styles;
