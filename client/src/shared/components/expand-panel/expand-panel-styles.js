const styles = theme => ({
  container: {
    width: '40vw',
    maxWidth: '768px',
    margin: '0 auto',
    minHeight: '48px',
    color: theme.textColor,
    transition: 'background-color 0.5s ease-in',
    '& svg': {
      color: theme.svgIconsColor
    }
  },
  header: {
    padding: '8px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
    borderRadius: '10px',
    margin: '0 auto',
    transition: 'background-color 0.5s ease-in',
    background: theme.defaultBgColor,
    width: '220px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h2': {
      margin: '10px 0',
      width: '100%',
      textAlign: 'left'
    }
  },
  iconChanged: {
    transform: 'rotate(180deg)'
  },
  content: {
    borderRadius: '10px',
    background: theme.defaultBgColor,
    transition: 'background-color 0.5s ease-in',
    margin: '10px 0 0 0',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px'
  },
  contentWrapper: {
    padding: '10px'
  },
  '@media (max-width: 768px)': {
    container: {
      width: '90vw'
    }
  }
});

export default styles;
