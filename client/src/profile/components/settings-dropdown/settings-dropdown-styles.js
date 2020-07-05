const styles = theme => ({
  container: {
    width: '200px',
    position: 'absolute',
    color: theme.textColor,
    zIndex: '100',
    background: theme.profilePanelBgColor,
    top: '70px',
    right: '5px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px'
  }
});

export default styles;
