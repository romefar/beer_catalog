const styles = {
  container: {
    width: '40vw',
    margin: '0 auto',
    minHeight: '48px'
  },
  header: {
    padding: '8px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
    borderRadius: '10px',
    margin: '0 auto',
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
    margin: '10px 0 0 0',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px'
  },
  contentWrapper: {
    padding: '10px'
  }
};

export default styles;
