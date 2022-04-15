// local services
export const storeLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export const removeLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
