import  {createContext, useContext, ReactNode} from 'react';

interface LoadingProviderProps {
    value: boolean;
    children: ReactNode;
}

const LoadingContext = createContext<boolean>(false);

export const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({value, children}: LoadingProviderProps) => {

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;