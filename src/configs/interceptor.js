import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// let's pretend the company is called ACME
export const isACMEDomain = (url) => {
  return /^([^/]+:)?\/{2,3}[^/]+?(\.ACME\.com|\.acme)(:|\/|$)/i.test(url);
};

function Interceptor() {
  const [errorInterceptor, setErrorInterceptor] = useState(undefined);
  const [authInterceptor, setAuthInterceptor] = useState(undefined);
  //   const { token } = useSelector((state) => state.global);
  const addAuthInterceptor = () => {
    const authInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = null;
        // config.headers["Access-Control-Allow-Origin"] = "*";
        config.headers["Content-Type"] = "application/json";
        if (token !== undefined && token !== null)
          config.headers["authorization"] = "JWT " + token;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    setAuthInterceptor(authInterceptor);
  };

  const removeAuthInterceptor = () => {
    axios.interceptors.request.eject(authInterceptor);
    setAuthInterceptor(undefined);
  };

  const addErrorInterceptor = () => {
    const errorInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    setErrorInterceptor(errorInterceptor);
  };

  const removeErrorInterceptor = () => {
    axios.interceptors.request.eject(errorInterceptor);
    setErrorInterceptor(undefined);
  };

  useEffect(() => {
    addAuthInterceptor();
    addErrorInterceptor();
    return () => {
      removeAuthInterceptor();
      removeErrorInterceptor();
    };
  }, []);

  return null;
}

export default Interceptor;
