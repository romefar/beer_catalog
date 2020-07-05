const styles = theme => ({
  list: {
    margin: 0,
    padding: 0,
    width: 'fit-content',
    transition: 'background-color 0.5s ease-in'
  },
  container: {
    padding: '0 24px 0 0',
    fontFamily: `Helvetica, ${theme.defaultFontStack}`,
    color: theme.textColor
  },
  title: {
    margin: '0 0 7px 0'
  },
  listItem: {
    padding: '12px',
    border: '1px solid #ccc',
    listStyle: 'none',
    '&:first-child': {
      borderRadius: '5px 5px 0 0'
    },
    '&:nth-child(n + 1)': {
      borderBottom: 'none'
    },
    '&:last-child': {
      border: '1px solid #ccc',
      borderRadius: '0 0 5px 5px'
    },
    '&:hover': {
      backgroundColor: theme.listItemHoveredColor
    }
  },
  bordersTransparent: {
    border: '1px solid transparent'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: 0
    }
  }
});
export default styles;
