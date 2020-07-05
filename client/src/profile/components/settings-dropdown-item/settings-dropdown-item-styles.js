const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: `Lato, ${theme.defaultFontStack}`,
    color: theme.textColor,
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '3px',
    borderRadius: '10px',
    transition: 'background-color 0.7s ease-in',
    margin: '5px 0',
    '&:hover': {
      backgroundColor: 'rgba(105,105,105, 0.4)'
    }
  },
  link: {
    textDecoration: 'none',
    '&:visited, &:active, &:hover': {
      color: 'inherit'
    }
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  iconContainer: {
    margin: '0 7px 0 0',
    display: 'flex',
    alignItems: 'center'
  },
  divider: {
    height: '2px',
    backgroundColor: theme.dividerColor,
    borderRadius: '20px'
  }
});

export default styles;
