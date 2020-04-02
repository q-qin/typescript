import axios from 'axios';
import store from '@/store';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

const $axios = axios.create({timeout: 1000 * 5});

$axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, (error: any) => {
  Promise.reject(error);
});

$axios.interceptors.response.use(
(response: AxiosResponse) => {
    if (response.status !== 200) {
        console.error('error');
    } else {
        return response.data;
    }
},
(error: any) => {
    return Promise.reject(error);
});

export default $axios