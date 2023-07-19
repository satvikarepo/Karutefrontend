import { Dispatch } from "redux";
import { LoginRquest, User } from "../../common/types";
import {GLOBAL_CONSTS} from "../constants";
import http from "../../common/helpers/http";

export function SubmitLogin(data:LoginRquest){
    return async (dispatch:Dispatch)=>{
        //dummy login
        const res = await http.get<any>('https://jsonplaceholder.typicode.com/posts').then(res=>{
            dispatch(loginSuccess({name:'pss', email:'pss@g.com',token:'token', refreshToken:'refreshToken'}));
        }).catch(err=>{
            console.log(err);
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


