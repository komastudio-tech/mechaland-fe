import Axios from 'axios';
import { createContext, useContext } from 'react';

const intialContext = {
  axios: null,
};

export const ApiContext = createContext(intialContext);

export const ApiProvider = ({ children }) => {

    let  baseURL = process.env.NEXT_PUBLIC_MECHALAND_API;

    const axiosInstance = Axios.create({
        baseURL,
    });

    axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
            if (typeof err.response === 'undefined') {
            return Promise.reject(
                new Error(
                'A network error occured. This could be a CORS issue. Please try again using VPN'
                )
            );
            }
        }
    )
 
    return (
        <ApiContext.Provider
            value={{
                axios: axiosInstance,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};

export const useStoreApi = () => {
    const context = useContext(ApiContext);
    return context;
};