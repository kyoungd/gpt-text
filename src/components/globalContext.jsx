import { createContext } from 'react';

// Create a context object
export const GlobalContext = createContext();

// Define the initial state and the reducer function
export const initialState = { 
    appState: {},
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'state':
        return { appState: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
