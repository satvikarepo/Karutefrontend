import {http} from '../../common/helpers/http';
import { SignUpForm } from '../../common/types';


export const SendOtp=(data:SignUpForm, cb:Function)=>{
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