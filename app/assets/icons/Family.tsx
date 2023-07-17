import { SvgXml } from 'react-native-svg';

interface IFamilySvg{
 w?:string|number,
 h?:string|number,
 color?:string,
 filled?:boolean
}

export const IconFamily=(props?:IFamilySvg)=>{
   
    return <SvgXml xml={`<svg viewBox="0 0 32 32"
    width="${props?.w || 24}px" height="${props?.h || 24}px"
    xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 26"
     id="Layer_26"><path fill="${props?.color || "currentColor"}" d="M14,25.18a5,5,0,0,1-5-5V18.36a1,1,0,0,1,.49-.86l3.63-2.18a1,1,0
     ,0,1,1,1.72L11,18.93v1.25a3,3,0,0,0,3,3,1,1,0,0,1,0,2Z"/><path fill="${props?.color || "currentColor"}" d="M7,25.18H6a5,5,0,0,
     1-5-5V18.36a1,1,0,0,1,.49-.86l3.63-2.18a1,1,0,0,1,1,1.72L3,18.93v1.25a3,3,0,0,0,3,3H7a1,1,0,0,1,0,2Z"/>
     <path fill="${props?.color || "currentColor"}" d="M10,15A6,6,0,0,1,10,3a1,1,0,0,1,0,2,4,4,0,0,0,0,8,1,1,0,0,1,0,2Z"/><path 
     fill="${props?.color || "currentColor"}" d="M18,15a6,6,0,1,1,6-6A6,6,0,0,1,18,15ZM18,5a4,4,0,1,0,4,4A4,4,0,0,0,18,5Z"/>
     <path fill="${props?.color || "currentColor"}" d="M24,29a7,7,0,1,1,7-7A7,7,0,0,1,24,29Zm0-12a5,5,0,1,0,5,5A5,5,0,0,0,24,17Z"/>
     <rect fill="${props?.color || "currentColor"}" height="2" width="6" x="21" y="21"/><rect fill="${props?.color || "currentColor"}" height="6" width="2"
      x="23" y="19"/></g></svg>`} />
}