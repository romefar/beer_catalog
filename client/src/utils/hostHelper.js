export default () => {
  if (process.env.NODE_ENV === 'prodcuction') {
    return 'https://romefar-beer-catalog-back.herokuapp.com';
  }
  return 'http://localhost:5000';
};
