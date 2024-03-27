import Router from 'next/router';
import axios from 'axios';
import qs from 'qs';

import { getApiUrl } from '@/utils/getBaseUrl';

const baseURL = getApiUrl();

const CODES = {
  BAD_REQUEST_ERROR: 400,
  UNAUTHORIZED_ERROR: 401,
  FORBIDDEN_RESOURCE_ERROR: 403,
} as const;

export const axiosClient = axios.create({
  baseURL,
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { encode: false, arrayFormat: 'repeat' }),
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers = {
      ...(config.headers as any),
    };

    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === CODES.UNAUTHORIZED_ERROR) {
      Router.push('/auth/login');
    }
    return Promise.reject(error);
  }
);
