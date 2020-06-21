const styles = {
  list: {
    margin: 0,
    padding: 0,
    width: 'fit-content',
    transition: 'background-color 0.5s ease-in'
  },
  container: {
    padding: '0 12px',
    fontFamily: 'Helvetica, Arial, sans-serif'
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
      backgroundColor: '#f5f5f5'
    }
  },
  bordersTransparent: {
    border: '1px solid transparent'
  }
};
export default styles;
