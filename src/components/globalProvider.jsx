import React, { useReducer } from 'react';
import { GlobalContext, initialState, reducer } from './globalContext';

// Create a provider component that wraps your app
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
  };
