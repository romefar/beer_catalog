const styles = theme => ({
  navLinksList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '1.2rem',
    alignItems: 'center',
    fontFamily: 'Lato, Segoe UI, Verdana, sans-serif',
    '& li': {
      margin: '0 0.5rem'
    },
    '& a': {
      borderBottom: '3px solid transparent',
      color: theme.linkColor,
      textDecoration: 'none',
      padding: '0.5rem',
      transition: '.4s ease-in'
    },
    '& a:hover, a:active': {
      borderBottomColor: 'rgb(0,232,0)'
    },
    '& a.active': {
      color: 'yellow',
      borderBottomColor: 'yellow'
    }
  },
  authButton: {
    border: '1px solid white',
    outline: 'none',
    background: 'transparent',
    color: 'white',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer'
  }
});

export default styles;
