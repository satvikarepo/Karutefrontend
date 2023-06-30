import { Dispatch } from "redux";
import { LoginRquest, User } from "../../common/types";
import {GLOBAL_CONSTS} from "../constants";
import http from "../../common/helpers/http";

export function SubmitLogin(data:LoginRquest){
    return async (dispatch:Dispatch)=>{
        dispatch(startLoading());
        //dummy login
        const res = await http.get<any>('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log('apisuccess')
            dispatch(loginSuccess({name:'pss', email:'pss@g.com',token:'token'}));
        }).catch(err=>{
            dispatch(stopLoading());
        });
    }
}

export const loginSuccess=(payload:User)=>({
    type:GLOBAL_CONSTS.LOGIN_SUCCESS,
    payload
});
export const logout=()=>({
    type:GLOBAL_CONSTS.LOGOUT,
    payload:undefined
});

export const startLoading=()=>({
    type:GLOBAL_CONSTS.LOADING_START,
    payload:undefined
});
export const stopLoading=()=>({
    type:GLOBAL_CONSTS.LOADING_STOP,
    payload:undefined
});
export const toggleLoading=()=>({
    type:GLOBAL_CONSTS.LOADING_TOGGLE,
    payload:undefined
});

