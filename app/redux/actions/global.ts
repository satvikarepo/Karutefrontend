import { Dispatch } from "redux";
import { ChangePasswordForm, LoginRquest, User } from "../../common/types";
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
        await http.post<any>('Users/Login',data).then(res=>{
            dispatch(loginSuccess(res));
        }).catch(err=>{
            if(err){
                dispatch(showError([err]));
            }
        });
    }
}

export function SubmitChangePassword(email:string='',data:ChangePasswordForm, cb:()=>void){
    const _postData={...data, Email:email}
    console.log('postdata',_postData);
    return async (dispatch:Dispatch)=>{
        await http.post<any>('Users/ChangePassword',_postData).then(res=>{
            cb();
        }).catch(err=>{
            if(err){
                dispatch(showError([err]));
            }
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


