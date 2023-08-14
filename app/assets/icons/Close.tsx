
import { SvgXml } from 'react-native-svg';

interface ICloseSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?: boolean,
}

export const IconClose = (props?: ICloseSvg) => {
    return <SvgXml xml={`<svg width="${props?.w || 24}px" height="${props?.h || 24}px"
     fill="none" stroke="${props?.color || "currentColor"}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>`} />

}