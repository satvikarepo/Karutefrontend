import { SvgXml } from 'react-native-svg';

interface IBellSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?: boolean
}

export const IconBell = (props?: IBellSvg) => {

    return <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg"
    width="${props?.w || 24}px" height="${props?.h || 24}px" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 
    17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 
    2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295
     17.1352 6.36177 17.8476 12 17.8476Z" stroke="${props?.color || "currentColor"}" stroke-width="1.5" 
     stroke-linecap="round" 
     stroke-linejoin="round"/>
    <path d="M14.3888 20.8572C13.0247 22.372 10.8967 22.3899 9.51947 20.8572" 
    stroke="${props?.color || "currentColor"}" stroke-width="1.5" stroke-linecap="round" 
    stroke-linejoin="round"/>
  </svg>`} />
   
}




