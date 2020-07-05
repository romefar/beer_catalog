const styles = theme => ({
  modal: {
    zIndex: '100',
    position: 'fixed',
    color: theme.textColor,
    top: '22vh',
    left: '10%',
    fontFamily: 'Open Sans, sans-serif',
    width: '80%',
    background: theme.bgColor,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
    borderRadius: '8px'
  },
  modalHeader: {
    width: '100%',
    padding: '1rem 0.5rem',
    backgroundColor: '#3f51b5',
    color: 'white',
    '& h2': {
      margin: '0.5rem'
    }
  },
  modalContent: {
    padding: '1rem 0.5rem'
  },
  modalFooter: {
    padding: '1rem 0.5rem',
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
      margin: '0 0 0 20px'
    }
  },
  '@media (min-width: 768px)': {
    modal: {
      left: 'calc(50% - 20rem)',
      width: '40rem'
    }
  },
  modalEnter: {
    transform: 'translateY(-10rem)',
    opacity: 0
  },
  modalEnterActive: {
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'all 200ms'
  },
  modalExit: {
    transform: 'translateY(0)',
    opacity: 1
  },
  modalExitActive: {
    transform: 'translateY(-10rem)',
    opacity: 0,
    transition: 'all 200ms'
  }
});

export default styles;
