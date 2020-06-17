const styles = {
  '@global': {
    body: {
      margin: 0
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
