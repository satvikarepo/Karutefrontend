
import { SvgXml } from 'react-native-svg';

interface IArrowDownSvg {
    w?: string | number,
    h?: string | number,
    color?: string,
    filled?: boolean
}

export const IconArrowDown = (props?: IArrowDownSvg) => {
    return <SvgXml xml={`<svg
    width="${props?.w || 14}px" height="${props?.h || 8}px"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="${props?.color || 'currentColor'}"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      id="Vector"
      d="M13.0283 0.165321L6.99938 6.0422L0.970513 0.165321C0.862797 0.0601085 0.718197 
      0.00120617 0.567624 0.00120617C0.41705 0.00120617 0.27245 0.0601085 0.164734 0.165321C0.112578 
      0.216423 0.0711434 0.277418 0.0428567 0.344735C0.01457 0.412051 0 0.484336 0 0.557354C0 0.630372 
      0.01457 0.702656 0.0428567 0.769973C0.0711434 0.83729 0.112578 0.898285 0.164734 0.949387L6.5784 
      7.20262C6.69103 7.31241 6.8421 7.37385 6.99938 7.37385C7.15667 7.37385 7.30773 7.31241 7.42037 
      7.20262L13.834 0.950594C13.8866 0.899453 13.9283 0.838308 13.9568 0.770768C13.9853 0.703229 14 
      0.630663 14 0.557354C14 0.484045 13.9853 0.411479 13.9568 0.343939C13.9283 0.2764 13.8866 0.215255 
      13.834 0.164114C13.7263 0.0589018 13.5817 0 13.4311 0C13.2806 0 13.136 0.0589018 13.0283 
      0.164114V0.165321Z"
      fill="${props?.color || "currentColor"}" 
      fill-opacity="0.6"
    />
  </svg>`} />
}


