import { createContext } from 'react';

// Create a context object
export const GlobalContext = createContext();

// Define the initial state and the reducer function
export const initialState = { 
    count: 0,
    appState: {},
    message: '',
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'state':
        return { appState: action.payload };
    default:
      return state;
  }
};
