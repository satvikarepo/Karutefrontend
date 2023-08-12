import { SvgXml } from 'react-native-svg';

interface ITickSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?:boolean
}

export const IconTick = (props?: ITickSvg) => {
    return <SvgXml xml={`<svg width="${props?.w||24}px" height="${props?.h||24}px"
     fill="none" stroke="${props?.color || "currentColor"}" stroke-linecap="round" 
    stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
     xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6 9 17l-5-5"></path>
    </svg>`}
        />
}

