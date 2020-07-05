const styles = theme => ({
  inputContainer: {
    width: '40vw',
    maxWidth: '768px',
    margin: '0 auto',
    '& svg': {
      color: theme.svgIconsColor
    }
  },
  searchForm: {
    width: '100%',
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputField: {
    fontFamily: `Lato, ${theme.defaultFontStack}`,
    padding: '10px',
    fontSize: '1rem',
    outline: 'none',
    color: theme.textColor,
    width: '90%',
    background: theme.inputFocusColor,
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
  },
  '@media (max-width: 968px)': {
    inputContainer: {
      width: '70vw'
    }
  }
});

export default styles;
