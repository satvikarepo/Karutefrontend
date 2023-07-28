import {http} from '../../common/helpers/http';
import { SignUpForm } from '../../common/types';


export const SendOtp=(data:SignUpForm, cb:Function)=>{
    const _postData={...data};
    _postData.email=_postData.email.trim();
    _postData.name=_postData.name.trim();
    _postData.password=_postData.password.trim();

    http.post<any>('Users/SendEmail',data).then(res=>{
        _postData.emailOtp=res.emailOtp;
        console.log('res',_postData);
        cb(_postData);
    }).catch(err=>{
        console.log('err',err);
    })
}