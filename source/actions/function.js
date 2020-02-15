import queryString from 'query-string';

export const getValue = (key, value) => {
  if (Array.isArray(value))
    return value.map(val => getValue(key, val)).join('&');
  return `${key}=${encodeURIComponent(value)}`;
};

export const getQueryParametres = obj => queryString.stringify(obj);
