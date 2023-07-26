import { Dispatch } from "redux";
import { LoginRquest, User } from "../../common/types";
import {GLOBAL_CONSTS} from "../constants";
import http from "../../common/helpers/http";
import { showError } from "./commonActions";

export function SubmitLogin(data:LoginRquest){
    return async (dispatch:Dispatch)=>{
        //dummy login
        // const res = await http.get<any>('https://jsonplaceholder.typicode.com/posts').then(res=>{
        //     dispatch(loginSuccess({name:'pss', email:'pss@g.com',token:'token', refreshToken:'refreshToken'}));
        // }).catch(err=>{
        //     console.log(err);
        // });
        console.log(data);
        const res = await http.post<any>('Users/Login',data).then(res=>{
            dispatch(loginSuccess(res));
        }).catch(err=>{
            if(err.status==401){
               dispatch(showError([err.data]));
            }
            console.log('login api error',err);
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


