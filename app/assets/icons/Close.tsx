
import { SvgXml } from 'react-native-svg';

interface ICloseSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?: boolean
}

export const IconClose = (props?: ICloseSvg) => {
    return <SvgXml xml={`<svg viewBox="0 0 24 24" width="${props?.w || 24}px" height="${props?.h || 24}px"
xmlns="http://www.w3.org/2000/svg"><title/>
<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,
13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,
10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z" 
fill="${props?.color || "currentColor"}" /></svg>`} />

}