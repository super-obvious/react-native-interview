import React, { FunctionComponent } from 'react';
import { AppContextProvider } from "./AppContext";

const AppStateProvider: FunctionComponent = ({ children }) => {
    return (
        <AppContextProvider>
            {children}
        </AppContextProvider>
    );
};

export { AppStateProvider };
