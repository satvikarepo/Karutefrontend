import {http} from '../../common/helpers/http';
import { SignUpForm } from '../../common/types';


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