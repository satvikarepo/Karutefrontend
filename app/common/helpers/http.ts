import axiosClient, { Method } from "axios";
import store,{useDispatch} from "../../redux/store";
import { startLoading, stopLoading } from "../../redux/actions/commonActions";
import axios from "axios";
import { ActionType } from "../types";

const instance = axiosClient.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.request.use(req => {
  const token = "";// store.getState().global.user.token;
  store.dispatch<ActionType<any>>(startLoading());
  if (token && req.headers) {
    req.headers["token"] = token;
  }
  return req;
})

instance.interceptors.response.use(
  (res) => {
    store.dispatch<ActionType<any>>(stopLoading());
    return res.data
  },
  (err) => {
    store.dispatch<ActionType<any>>(stopLoading());
    if (err.response) {
      return Promise.reject(err.response);
    }
    if (err.request) {
      return Promise.reject(err.request);
    }
    return Promise.reject(err.message);
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
    // base: "http://localhost:3000",
    base:baseApiUrl,
    build:function(path:string){
      return `${this.base}/${path}`
    }
  }
}
export { http }
export default http;