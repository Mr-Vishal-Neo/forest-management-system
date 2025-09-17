// src/utils/localStorageUtils.ts

const isSessionStorageAvailable = () => {
  try {
    const testKey = "__test__";
    sessionStorage.setItem(testKey, testKey);
    sessionStorage.removeItem(testKey);
    return true;
  } catch (e) {
    console.warn("sessionStorage is not available.", e);
    return false;
  }
};

export const setItem = (key: string, value: string) => {
  if (isSessionStorageAvailable()) {
    sessionStorage.setItem(key, value);
  }
};

export const getItem = (key: string): string | null => {
  if (isSessionStorageAvailable()) {
    return sessionStorage.getItem(key);
  }
  return null;
};

export const removeItem = (key: string) => {
  if (isSessionStorageAvailable()) {
    sessionStorage.removeItem(key);
  }
};

export const clearAll = () => {
  if (isSessionStorageAvailable()) {
    sessionStorage.clear();
  }
};
