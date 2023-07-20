import {http} from '../../common/helpers/http';

export type SignUpForm = {
    name: string
    email: string,
    password: string
    confirmPassword: string,
}

export const registerUser=(data:SignUpForm, cb:Function)=>{

    http.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        console.log('res',res);
        cb();
    }).catch(err=>{
        
    });
    // http.post<any>('users',data).then(res=>{
    //     console.log('res',res);
    //     cb();
    // }).catch(err=>{
    //     console.log('err',err);
    // })
}