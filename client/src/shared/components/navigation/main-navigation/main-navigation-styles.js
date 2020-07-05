const styles = theme => ({
  '@global': {
    body: {
      background: theme.bgColor
    }
  },
  menuButton: {
    background: 'transparent',
    width: '3rem',
    border: 'none',
    display: 'block',
    cursor: 'pointer',
    '& svg': {
      fill: 'white'
    }
  },
  menuHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    '& button': {
      margin: '0 10px 0 0'
    }
  },
  headerTitle: {
    fontFamily: `Bebas Neue, ${theme.defaultFontStack}`,
    fontSize: '3rem',
    '& a': {
      textDecoration: 'none',
      color: theme.linkColor
    }
  },
  navDrawer: {
    height: '100%'
  },
  navProfileContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  headerNav: {
    display: 'none'
  },
  '@media (min-width: 768px)': {
    menuButton: {
      display: 'none'
    },
    headerNav: {
      display: 'block'
    }
  }
});

export default styles;
