import { SvgXml } from 'react-native-svg';

interface IUserSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?: boolean
}

//"#7563F7"
export const IconCalendar = (props?: IUserSvg) => {

    if (props?.filled) {
        return <SvgXml xml={`<svg  width="${props?.w || 24}px" height="${props?.h || 24}px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.09253 9.40421H20.9165" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.442 13.3097H16.4512" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.0047 13.3097H12.014" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.55793 13.3097H7.5672" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.442 17.1962H16.4512" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.0047 17.1962H12.014" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.55793 17.1962H7.5672" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0438 2V5.29078" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.9654 2V5.29078" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 
        3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 
        21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" 
        stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" 
        stroke-linejoin="round"/>
        </svg>
        `}
        />
    }
    return <SvgXml xml={`<svg  width="${props?.w || 24}px" height="${props?.h || 24}px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.09253 9.40421H20.9165" stroke="${props?.color || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.442 13.3097H16.4512" stroke="${props?.color || "currentColor"}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.0047 13.3097H12.014" stroke="${props?.color || "currentColor"}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.55793 13.3097H7.5672" stroke="${props?.color || "currentColor"}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.442 17.1962H16.4512" stroke="${props?.color || "currentColor"}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.0047 17.1962H12.014" stroke="${props?.color || "currentColor"}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.55793 17.1962H7.5672" stroke="${props?.color || "currentColor"}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.0438 2V5.29078" stroke="${props?.color || "currentColor"}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.9654 2V5.29078" stroke="${props?.color || "currentColor"}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 
    3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 
    21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="${props?.color || "currentColor"}"  
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `}
    />
}

