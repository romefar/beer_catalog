const styles = theme => ({
  commentItem: {
    display: 'flex',
    margin: '0 0 20px 0',
    color: theme.textColor,
    transition: 'background-color 0.5s ease-in'
  },
  stampInfo: {
    '& span': {
      display: 'block'
    },
    '& span:last-child': {
      color: '#808080',
      fontSize: '0.8rem',
      margin: '0 0 7px 0'
    },
    '& span:first-child': {
      fontWeight: 'bold',
      fontFamily: `Roboto, ${theme.defaultFontStack}`
    }
  },
  imageContainer: {
    width: '100px',
    margin: '0 30px 0 0 ',
    '& img': {
      width: '100%',
      borderRadius: '50%'
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  userName: {
    display: 'inline-block',
    margin: '0 7px 0 0'
  },
  comment: {
    margin: '5px 0'
  },
  info: {
    width: '100%',
    fontFamily: theme.defaultFontStack
  }
});

export default styles;
