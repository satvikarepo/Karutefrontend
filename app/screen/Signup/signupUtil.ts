import {http} from '../../common/helpers/http';
import { SignUpForm } from '../../common/types';


export const SendOtp=(data:SignUpForm, cb:Function)=>{
    const _postData={...data};
    _postData.email=_postData.email.trim();
    _postData.name=_postData.name.trim();
    _postData.password=_postData.password.trim();

    http.get<any>('https://jsonplaceholder.typicode.com/posts').then(res=>{
       // console.log('res',res);
        data.emailOtp= ''+12345; // res.data.emailOtp;
        cb(data);
    }).catch(err=>{
        
    });
    // http.post<any>('users',data).then(res=>{
    //     console.log('res',res);
    //     cb();
    // }).catch(err=>{
    //     console.log('err',err);
    // })
}