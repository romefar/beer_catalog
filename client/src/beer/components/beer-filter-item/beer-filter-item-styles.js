const styles = theme => ({
  filterRow: {
    display: 'flex',
    justifyContent: 'space-between',
    transition: 'background-color 0.5s ease-in'
  },
  filterValueLabel: {
    display: 'inline-block'
  },
  sliderContainer: {
    width: '40%'
  },
  filterInfo: {
    fontFamily: `Lato, ${theme.defaultFontStack}`,
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default styles;
