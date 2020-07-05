const styles = theme => ({
  container: {
    width: '50vw',
    maxWidth: '960px',
    margin: '20px auto',
    color: theme.textColor,
    '& span': {
      display: 'inline-block'
    },
    '& p': {
      margin: '10px 0'
    },
    '& p:first-child': {
      margin: '0 0 10,px 0'
    },
    '& p span:first-child': {
      fontWeight: 'bold',
      margin: '0 7px 0 0',
      fontFamily: `Roboto, ${theme.defaultFontStack}`
    },
    '& p span:last-child': {
      fontFamily: theme.defaultFontStack
    }
  },
  info: {
    padding: '2px'
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0 20px 0'
  },
  imageContainer: {
    width: '150px',
    margin: '0 30px 0 0 ',
    '& img': {
      width: '100%',
      borderRadius: '50%'
    }
  },
  '@media (max-width: 768px)': {
    container: {
      width: '80vw',
      flexWrap: 'wrap'
    }
  },
  '@media (max-width: 560px)': {
    profileContainer: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    imageContainer: {
      margin: 0
    }
  }
});

export default styles;
