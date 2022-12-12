import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axiosRetry from 'axios-retry';
import { DELAY_TIME_API_RETRY, MAX_API_RETRY } from './constants';

const getCancelToken = () => axios.CancelToken;

const globalAxios = axios.create();

// globalAxios.defaults.baseURL = process.env.REACT_APP_BACKEND;
// globalAxios.defaults.timeout = 10000;
// globalAxios.defaults.withCredentials = true;

axiosRetry(globalAxios, {
  retries: MAX_API_RETRY,
  retryDelay: retryCount => {
    return retryCount * DELAY_TIME_API_RETRY;
  },
  retryCondition: (error: AxiosError) => {
    const urlWallet = process.env.REACT_APP_WALLET_ENDPOINT;
    const retryCondition =
      error &&
      urlWallet &&
      error.config.url &&
      error.config.url.includes(urlWallet);

    return retryCondition ? true : false;
  },
});

const AxiosInterceptor = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestConfig = config => {
      if (config?.headers) {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
      }
      return config;
    };

    const responseCallback = response => {
      return response;
    };

    const errCallback = error => {
      if (error.response.status === 401) {
      }

      return Promise.reject(error);
    };

    const requestInterceptor = globalAxios.interceptors.request.use(
      requestConfig,
      errCallback,
    );

    const responseInterceptor = globalAxios.interceptors.response.use(
      responseCallback,
      errCallback,
    );

    return () => {
      globalAxios.interceptors.request.eject(requestInterceptor);
      globalAxios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return children;
};

export { getCancelToken, AxiosInterceptor };

export default globalAxios;
