import { SvgXml } from 'react-native-svg';

interface IUserSvg{
 w?:string|number,
 h?:string|number,
 color?:string,
 filled?: boolean
}

export const IconProfile=(props?:IUserSvg)=>{
    if(props?.filled){
        return <SvgXml xml={`<svg  width="${props?.w||24}px" height="${props?.h||24}px"  viewBox="0 0 24 24" 
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 
        4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 
        19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z" 
        stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 
        16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 
        7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z" 
        stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`} />
    }
   
    return <SvgXml xml={`<svg  width="${props?.w||24}px" height="${props?.h||24}px"  viewBox="0 0 24 24" 
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 
    4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 
    19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z" 
    stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 
    16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 
    7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z" 
    stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`} />
}



