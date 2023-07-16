import { SvgXml } from 'react-native-svg';

interface ILockSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?: boolean
}

export const IconLock = (props?: ILockSvg) => {

    if (props?.filled) {
        return <SvgXml xml={`<svg width="${props?.w || 24}px" height="${props?.h || 24}px" viewBox="0 0 20 20" 
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13.6C1 11.0548 1 9.78125 1.7911 8.99105C2.5813 8.19995 3.8548 8.19995 6.4 8.19995H13.6C16.1452
         8.19995 17.4187 8.19995 18.2089 8.99105C19 9.78125 19 11.0548 19 13.6C19 16.1452 19 17.4187 18.2089 
         18.2089C17.4187 19 16.1452 19 13.6 19H6.4C3.8548 19 2.5813 19 1.7911 18.2089C1 17.4187 1 16.1452 1 13.6Z"
          stroke="${props?.color || "currentColor"}" stroke-width="1.5"/>
        <path d="M10 15.4C10.9941 15.4 11.8 14.5942 11.8 13.6C11.8 12.6059 10.9941 11.8 10 11.8C9.00588 
        11.8 8.2 12.6059 8.2 13.6C8.2 14.5942 9.00588 15.4 10 15.4Z" stroke="${props?.color || "currentColor"}"
         stroke-width="1.5"/>
        <path d="M4.60001 8.2V6.4C4.60001 4.96783 5.16893 3.59432 6.18163 2.58162C7.19433 1.56893 8.56784 
        1 10 1C11.4322 1 12.8057 1.56893 13.8184 2.58162C14.8311 3.59432 15.4 4.96783 15.4 6.4V8.2" 
        stroke="${props?.color || "currentColor"}" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`}
        />
    }
    return <SvgXml xml={`<svg width="${props?.w || 24}px" height="${props?.h || 24}px" viewBox="0 0 20 20" 
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13.6C1 11.0548 1 9.78125 1.7911 8.99105C2.5813 8.19995 3.8548 8.19995 6.4 8.19995H13.6C16.1452
     8.19995 17.4187 8.19995 18.2089 8.99105C19 9.78125 19 11.0548 19 13.6C19 16.1452 19 17.4187 18.2089 
     18.2089C17.4187 19 16.1452 19 13.6 19H6.4C3.8548 19 2.5813 19 1.7911 18.2089C1 17.4187 1 16.1452 1 13.6Z"
      stroke="${props?.color || "currentColor"}" stroke-width="1.5"/>
    <path d="M10 15.4C10.9941 15.4 11.8 14.5942 11.8 13.6C11.8 12.6059 10.9941 11.8 10 11.8C9.00588 
    11.8 8.2 12.6059 8.2 13.6C8.2 14.5942 9.00588 15.4 10 15.4Z" stroke="${props?.color || "currentColor"}"
     stroke-width="1.5"/>
    <path d="M4.60001 8.2V6.4C4.60001 4.96783 5.16893 3.59432 6.18163 2.58162C7.19433 1.56893 8.56784 
    1 10 1C11.4322 1 12.8057 1.56893 13.8184 2.58162C14.8311 3.59432 15.4 4.96783 15.4 6.4V8.2" 
    stroke="${props?.color || "currentColor"}" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`}
    />
}

