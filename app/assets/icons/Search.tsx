

import { SvgXml } from 'react-native-svg';

interface ISearchSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?:boolean
}

export const IconSearch = (props?: ISearchSvg) => {
    return <SvgXml xml={`<svg width="${props?.w||24}px" height="${props?.h||24}px" fill="none" 
    stroke="${props?.color || "currentColor"}" 
    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
      <path d="m21 21-6-6"></path>
    </svg>`}
        />
}