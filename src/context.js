import React, { createContext, useState } from 'react';

export const appContext = createContext();

function ContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(Boolean(sessionStorage.getItem('token')));

    const state = {
        isAuth,
        setIsAuth,
    };

    return <appContext.Provider value={state}>{children}</appContext.Provider>

}

export default ContextProvider;