import React, { useState } from "react";

export const useLocalStorage = (key, value) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : value;
      });
      const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
        console.log('local storage: ',localStorage)
      };
      return [storedValue, setValue];
}