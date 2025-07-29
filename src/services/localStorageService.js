const defaultKey = "_data";

const setLocalStorageItem = (key = defaultKey, data = undefined) => {
  if (!data) return;
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStorageItem = (key = defaultKey) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const clearLocalStorageItem = (key = defaultKey) => {
  localStorage.removeItem(key);
};

const updateLocalStorageItem = (key = defaultKey, newData = {}) => {
  const existingData = getLocalStorageItem(key);
  const updatedData = { ...existingData, ...newData };
  setLocalStorageItem(key, updatedData);
  return updatedData;
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export {
  setLocalStorageItem,
  getLocalStorageItem,
  clearLocalStorage,
  clearLocalStorageItem,
  updateLocalStorageItem,
};
