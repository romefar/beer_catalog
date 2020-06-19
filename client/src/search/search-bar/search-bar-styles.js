const styles = {
  inputContainer: {
    width: '40vw',
    margin: '0 auto'
  },
  searchForm: {
    width: '100%',
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputField: {
    fontFamily: 'Lato, Arial, sans-serif',
    padding: '10px',
    fontSize: '1rem',
    outline: 'none',
    width: '90%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '0 3px 0 0',
    transition: 'all 0.5s ease-in',
    '&:hover, &:focus': {
      borderColor: '#696969'
    }
  },
  inputFieldInvalid: {
    borderColor: 'red',
    '&:hover, &:focus': {
      borderColor: 'red'
    }
  }
};

export default styles;
