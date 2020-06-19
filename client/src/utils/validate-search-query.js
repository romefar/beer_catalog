import trim from './trim';

const validateSearchQuery = (query) => {
  const trimmedQuery = trim(query);
  if (trimmedQuery.match(/^[a-zA-Z0-9 !.\-_]+$/) || trimmedQuery === '') {
    return [true, trimmedQuery];
  }
  return [false, trimmedQuery];
};

export default validateSearchQuery;
