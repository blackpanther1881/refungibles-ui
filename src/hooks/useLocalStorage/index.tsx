import { useState, useEffect } from "react";

export const getStorageValue = (key: string, defaultValue: string) => {
  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem(key);
    return saved !== null && saved !== undefined
      ? JSON.parse(saved)
      : defaultValue;
  }
};

export const setLocalStorageValue = (key: string, value: string) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue =
        localStorage.getItem(key) !== null &&
        localStorage.getItem(key) !== undefined
          ? JSON.parse(localStorage.getItem(key) || String(defaultValue))
          : JSON.parse(String(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
