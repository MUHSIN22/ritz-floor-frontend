import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(null);

export const LoadingProvider = ({children}) => {
    const [loading,setLoading] = useState(false);

    return(
        <LoadingContext.Provider value={[loading,setLoading]}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoader = () => {
    return useContext(LoadingContext);
}