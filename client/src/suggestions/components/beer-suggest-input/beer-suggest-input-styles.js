const styles = theme => ({
  container: {
    width: '50vw',
    maxWidth: '960px',
    color: theme.textColor,
    margin: '20px auto',
    fontFamily: `Verdana, ${theme.defaultFontStack}`,
    '& svg': {
      color: theme.svgIconsColor
    },
    '& h2': {
      textAlign: 'center',
      margin: '0 0 10px 0'
    }
  },
  searchInput: {
    width: '100%',
    '& div div.MuiInputBase-root': {
      transition: 'background-color 0.5s ease-in',
      background: theme.inputFocusColor
    },
    '& input': {
      color: theme.textColor
    }
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center'
  },
  '@media (max-width: 910px)': {
    container: {
      width: '70vw'
    }
  }
});

export default styles;
