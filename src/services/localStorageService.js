const defaultKey = "_data";

export const setLocalStorageItem = (key = defaultKey, data = {}) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorageItem = (key = defaultKey) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {};
};

export const clearLocalStorageItem = (key = defaultKey) => {
  localStorage.removeItem(key);
};

export const updateLocalStorageItem = (key = defaultKey, newData = {}) => {
  const existingData = getLocalStorageItem(key);
  const updatedData = { ...existingData, ...newData };
  setLocalStorageItem(key, updatedData);
  return updatedData;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
