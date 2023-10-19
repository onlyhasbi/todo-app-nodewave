import axios, {AxiosRequestConfig} from 'axios'
import {url} from "@/utils/config";

axios.create();
axios.defaults.baseURL = url.base;

export const setAuthorization = (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.replace(/"/g, '')}`
}

export function post(config: AxiosRequestConfig) {
    return axios({
        method: 'post',
        ...config
    })
}

export function get(config: AxiosRequestConfig) {
    return axios({
        method: 'get',
        ...config
    })
}

export function put(config: AxiosRequestConfig) {
    return axios({
        method: 'put',
        ...config
    })
}

export function del(config: AxiosRequestConfig) {
    return axios({
        method: 'delete',
        ...config
    })
}

export default axios;