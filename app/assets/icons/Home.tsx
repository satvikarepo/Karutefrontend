import { SvgXml } from 'react-native-svg';

interface IUserSvg{
 w?:string|number,
 h?:string|number,
 color?:string
}

export const IconHome=(props?:IUserSvg)=>{
    return <SvgXml xml={`<?xml version="1.0" ?><svg 
    viewBox="0 0 24 24" width="${props?.w||40}px" height="${props?.h||40}px"
    xmlns="http://www.w3.org/2000/svg"><title/>
    <path d="M21.76,12.14a1,1,0,0,1-.76.36,1,1,0,0,1-.64-.23L20,12V18.5a2,2,0,0,1-2,2H15a1,1,0,0,1-1-1v-4a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H6a2,2,0,0,1-2-2V12l-.36.3a1,1,0,0,1-1.28-1.54l7.77-6.54a2.86,2.86,0,0,1,3.74,0l7.77,6.54A1,1,0,0,1,21.76,12.14Z" 
    fill="${props?.color||"currentColor"}" /></svg>`}
     />
}