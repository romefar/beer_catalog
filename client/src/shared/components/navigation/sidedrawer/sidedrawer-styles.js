const styles = {
  sideDrawer: {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: '100',
    height: '100vh',
    width: '70%',
    background: '#dbdbdb',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)'
  },
  slideInLeftEnter: {
    transform: 'translateX(-100%)'
  },
  slideInLeftEnterActive: {
    transform: 'translateX(0)',
    opacity: 1,
    transition: 'all 200ms'
  },
  slideInLeftExit: {
    transform: 'translateX(0%)',
    opacity: 1
  },
  lideInLeftExitActive: {
    transform: 'translateX(-100%)',
    opacity: 0,
    transition: 'all 200ms'
  }
};

export default styles;
