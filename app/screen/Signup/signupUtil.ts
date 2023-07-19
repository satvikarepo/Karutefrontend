import {http} from '../../common/helpers/http';

export type SignUpForm = {
    name: string
    email: string,
    password: string
    confirmPassword: string,
}

export const registerUser=(data:SignUpForm)=>{
    http.post<any>('users',data).then(res=>{
        
    }).catch(err=>{

    })
}