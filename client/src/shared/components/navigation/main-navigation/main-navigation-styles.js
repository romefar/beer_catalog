const styles = {
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
  headerTitle: {
    fontFamily: 'Bebas Neue, sans-serif',
    fontSize: '3rem',
    '& a': {
      textDecoration: 'none',
      color: 'white'
    }
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
};

export default styles;
