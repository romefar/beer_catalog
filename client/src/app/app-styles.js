const styles = {
  '@global': {
    body: {
      margin: 0
      // color: '#e9e9e9'
    },
    '*': {
      boxSizing: 'border-box'
    }
  },
  starSVG: {
    fill: 'red',
    '& path:first-child': {
      fill: 'blue'
    }
  }
};

export default styles;
