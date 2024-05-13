import { useState } from "react";

// Custom hook for handling localStorage
function useLocalStorage(key, initialValue) {
  // State to store the current value of the localStorage key
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse and return stored json or, if undefined, return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error, return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Function to set a value to localStorage
  const setValue = (valueOrFn) => {
    try {
      // Save state
      let newValue;
      if (typeof valueOrFn === 'function') {
        const fn = valueOrFn;
        newValue = fn(storedValue)
      }
      else {
        newValue = valueOrFn;
      }
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
