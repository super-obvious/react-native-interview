import React, {createContext, FunctionComponent, useEffect, useState,} from 'react';
import {retrieveData} from '../storage/AsyncStorage';


export type AppContextType = {
    values: string[],
    isLoading: boolean,
    setValues: (values: string[]) => void,
};

const defaultContext = {
    values: [],
    isLoading: false,
    setValues: () => null
};

const AppContext = createContext<AppContextType>(defaultContext);

const AppContextProvider: FunctionComponent = ({children}) => {
    const [values, setValues] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        fetchProfileFromAsyncStorage();
    }, []);

    const fetchProfileFromAsyncStorage = () => {
        retrieveData<string[]>('Values').then((values => {
            if (values)
                setValues(values)
            setIsLoading(false);
        })).catch(() => {
            setIsLoading(false);
            setError(true)
        })
    };

    return (
        <AppContext.Provider
            value={{values, setValues, isLoading}}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContextProvider, AppContext};
