
import { SvgXml } from 'react-native-svg';

interface IEmptySvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?: boolean,
}

export const IconEmpty = (props?: IEmptySvg) => {
    return <SvgXml xml={`<svg width="${props?.w || 24}px" height="${props?.h || 24}px" fill="none" 
    stroke="${props?.color || "currentColor"}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
    <path d="M9 10h.01"></path>
    <path d="M15 10h.01"></path>
    <path d="M9 15h6"></path>
  </svg>`} />

}