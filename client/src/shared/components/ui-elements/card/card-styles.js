const styles = theme => ({
  card: {
    margin: 0,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
    borderRadius: '6px',
    padding: '1rem',
    overflow: 'hidden',
    background: theme.defaultBgColor,
    border: '1px solid transparent',
    transition: 'background-color 0.5s ease-in'
  }
});

export default styles;
