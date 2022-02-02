import { createContext, useContext } from 'react';

export const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
