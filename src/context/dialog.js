import { createContext, useContext } from 'react';

export const DialogContext = createContext();

export const useDialog = () => {
  return useContext(DialogContext);
};
