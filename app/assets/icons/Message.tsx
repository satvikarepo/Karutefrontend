import { SvgXml } from 'react-native-svg';

interface IUserSvg{
 w?:string|number,
 h?:string|number,
 color?:string,
 filled?:boolean
}

export const IconMessage=(props?:IUserSvg)=>{
    return <SvgXml xml={`<svg width="${props?.w || 24}px" height="${props?.h || 24}px" viewBox="0 0 24 24" fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.9026 8.85107L13.4593 12.4641C12.6198 13.1301 11.4387 13.1301 10.5992 12.4641L6.11841
     8.85107" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 
    15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 
    18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" 
    stroke-linejoin="round"/>
    </svg>
    `} />
}
