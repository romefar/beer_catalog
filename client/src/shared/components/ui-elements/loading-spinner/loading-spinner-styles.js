const styles = {
  '@keyframes ldio-g8djpgziqln': {
    from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
    to: { transform: 'translate(-50%,-50%) rotate(360deg)' }
  },
  'loadingio-spinner-rolling-v81dbg85di8': {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    background: '#ffffff',
    width: '100%'
  },
  'ldio-g8djpgziqln': {
    position: 'relative',
    height: '70px',
    top: '35px',
    transform: 'translateZ(0) scale(1)',
    backfaceVisibility: 'hidden',
    transformOrigin: '0 0',
    boxSizing: 'content-box',
    width: 0,
    '& div': {
      width: '70px',
      height: '70px',
      border: '10px solid #ec2431',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: '$ldio-g8djpgziqln 1s linear infinite'
    }
  },
  spinnerOverlay: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  }
};

export default styles;
