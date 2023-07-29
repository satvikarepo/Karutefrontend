import axiosClient, { AxiosError, Method } from "axios";
import store from "../../redux/store";
import { startLoading, stopLoading, showError } from "../../redux/actions/commonActions";
import axios from "axios";
import { ActionType } from "../types";
import { commanMessage } from "../constants";

const instance = axiosClient.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.request.use(req => {
  const global=store.getState().global;
  const token = global?.user?.token || global?.tempToken;
  store.dispatch<ActionType<any>>(startLoading());
  console.log('global',token)
  if (token && req.headers) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
})

instance.interceptors.response.use(
  (res) => {
    store.dispatch<ActionType<any>>(stopLoading());
    return res.data
  },
  (err : AxiosError) => {
    store.dispatch<ActionType<any>>(stopLoading());
    console.log(err.response);
    if (err.response?.data) {
      if(typeof err.response?.data ==='object'){
        store.dispatch<ActionType<any>>(showError([commanMessage.GenericErr]));
        return;
      }
      return Promise.reject(err.response?.data);
    }
    store.dispatch<ActionType<any>>(showError([commanMessage.GenericErr]));
    // if (err.request) {
    //   return Promise.reject(err.request);
    // }
    return Promise.reject();
  }
);

const baseApiUrl='http://satvikaitsolutions.com/karute/api';
const defineMethod = (method: Method) => <T>(url: string, data?: any, headers?:any) => instance.request<any, T>({ method: method, 
  url: url.includes('http') ? url : `${baseApiUrl}/${url}`, data: data, headers: headers});
const http = {
  get: defineMethod('GET'),
  axios,
  put: defineMethod('PUT'),
  post: defineMethod('POST'),
  patch: defineMethod('patch'),
  delete: defineMethod('DELETE'),
  url: {
    base:baseApiUrl,
    build:function(path:string){
      return `${this.base}/${path}`
    }
  }
}
export { http }
export default http;