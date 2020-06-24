const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Lato, Arial, sans-serif',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '3px',
    borderRadius: '10px',
    transition: 'background-color 0.5s ease-in',
    margin: '5px 0',
    '&:hover': {
      backgroundColor: 'green'
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
    backgroundColor: 'black',
    borderRadius: '20px'
  }
};

export default styles;
