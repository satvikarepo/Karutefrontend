
import { SvgXml } from 'react-native-svg';

interface ILogoSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?:boolean
}

export const Logo = (props?: ILogoSvg) => {
    return <SvgXml xml={`<svg 
    width="${props?.w || 69}px" height="${props?.h || 86}px"
    viewBox="0 0 69 86" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Group 225">
    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M2.05548 18.5105L18.765 28.2807L34.1017 
    19.4264V0L2.05548 18.5105ZM66.1636 18.5218L49.3532 28.2353L34.1023 19.4264V0L66.1636 18.5218ZM34.1023 8
    5.1818V65.755L68.1717 46.0789V65.5033L34.1023 85.1818ZM20.8612 34.0357V53.4684L34.1017 
    61.1145V41.6906L20.8612 34.0357ZM34.1023 41.6905L68.1717 22.0038V41.4359L34.1023 61.1145V41.6905ZM16.8427
     31.7053V55.7898L34.1017 65.7544V85.1812L0.0266418 65.5027V21.995L16.8427 31.7053Z" 
     fill="${props?.color || "currentColor"}"/>
    </g>
    </svg>`}
        />
}


