import { useState, useEffect } from "react";

const useTheme = (key, defaultVal) => {
    //state to get currentvalue
  const [value, setValue] = useState(() => {
   const storedVal = localStorage.getItem(key);
    try {
      return storedVal ? JSON.parse(storedValue) : defaultVal;
    } catch {
      return defaultVal; // If stored value is not JSON, use default
    }
  });
//useeffect for setting our local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
  //same as [theme, setTheme]
export default useTheme;
