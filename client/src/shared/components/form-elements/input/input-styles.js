const styles = theme => ({
  container: {
    width: '100%',
    padding: '10px 0',
    color: theme.textColor,
    fontFamily: `Lato, ${theme.defaultFontStack}`
  },
  inputItem: {
    width: '100%',
    display: 'block',
    padding: '7px 10px',
    outline: 'none',
    border: '1px solid #ccc',
    background: theme.defaultBgColor,
    fontFamily: 'inherit',
    borderRadius: '5px',
    color: theme.textColor,
    transition: 'border-color 0.5s ease-in, background 0.5s ease-in',
    '&:focus': {
      background: theme.inputFocusColor
    }
  },
  inputTextarea: {
    height: '100px',
    resize: 'none'
  },
  inputInvalid: {
    border: '2px solid red'
  },
  errorMessage: {
    color: 'red',
    margin: '2px 0'
  },
  labelItem: {
    fontWeight: 'bold',
    display: 'block',
    textTransform: 'capitalize',
    fontFamily: 'inherit',
    margin: '0 0 8px 0'
  }
});

export default styles;
