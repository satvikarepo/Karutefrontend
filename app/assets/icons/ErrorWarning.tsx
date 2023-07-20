
import { SvgXml } from 'react-native-svg';

interface IErrorWarnSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?: boolean
}

export const IconErrorWarn = (props?: IErrorWarnSvg) => {
    return <SvgXml xml={`<svg data-name="Layer 3" id="Layer_3" viewBox="0 0 2050 2050" 
    width="${props?.w || 24}px" height="${props?.h || 24}px"
    xmlns="http://www.w3.org/2000/svg">
    <path fill="${props?.color || "currentColor"}" d="M1423.4,1502.6H626.6a192.7,192.7,0,0,1-163.9-294.9L861.1,566.6h0a192.9,
    192.9,0,0,1,327.8,0l398.4,641.1a191.9,191.9,0,0,1,29.3,100.4,192.6,192.6,0,0,1-193.2,194.5Z"/>
    <path fill="#fff" d="M1025,1137.5a45,45,0,0,1-45-45V809.9a45,45,0,0,1,90,0v282.6A45,45,0,0,1,1025,
    1137.5Z"/><path fill="#fff" d="M1025,1285.1a45,45,0,0,1-45-45v-27.5a45,45,0,0,1,90,0v27.5A45,45,0,
    0,1,1025,1285.1Z"/></svg>`} />

    return <SvgXml xml={`<svg viewBox="0 0 24 24" width="${props?.w || 24}px" height="${props?.h || 24}px"
xmlns="http://www.w3.org/2000/svg"><title/>
<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,
13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,
10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z" 
fill="${props?.color || "currentColor"}" /></svg>`} />

}