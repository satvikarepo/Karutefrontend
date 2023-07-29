import {http} from '../../common/helpers/http';
import { ChangePasswordForm, SignUpForm } from '../../common/types';


export const SubmitRegistration=(data:SignUpForm, cb:Function)=>{
    const _postData={...data};
    _postData.email=_postData.email.trim();
    _postData.name=_postData.name.trim();
    _postData.password=_postData.password.trim();

    http.post<any>('Users',data).then(res=>{
        console.log('res',res);
        cb(res);
    }).catch(err=>{
        console.log('err',err);
    })
}


export const SubmitRecoverPassword=(data:ChangePasswordForm, cb:Function)=>{
    const _postData:ChangePasswordForm={email:'', oldPassword:'', newPassword:'', confirmPassword:''};

    _postData.email=data.email ? data.email.trim() :  '';
    _postData.oldPassword=data.tempPassword || '';
    _postData.newPassword=data.newPassword.trim();

    http.post<any>('Users/RecoverPassword',_postData).then(res=>{
        console.log('res',res);
        cb(res);
    }).catch(err=>{
        console.log('Error: RecoverPassword',err);
    })
}