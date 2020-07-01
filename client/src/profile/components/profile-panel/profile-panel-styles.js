const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    color: 'white',
    '&:hover img': {
      borderColor: 'rgb(169, 112, 255);'
    }
  },
  profileImage: {
    width: '50px',
    height: '50px'
  },
  userName: {
    margin: '0 7px',
    fontFamily: 'Lato, Arial, sans-serif'
  },
  expandIcon: {
    transition: 'transform 0.5s ease-in'
  },
  expandIconOpened: {
    transform: 'rotate(180deg)'
  }
};

export default styles;
