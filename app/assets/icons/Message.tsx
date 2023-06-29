import { SvgXml } from 'react-native-svg';

interface IUserSvg{
 w?:string|number,
 h?:string|number,
 color?:string
}

export const IconMessage=(props?:IUserSvg)=>{
    return <SvgXml xml={`<svg width="${props?.w||40}px" height="${props?.h||40}px" 
    enable-background="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M11.984,13C10.031,13-0.031,4.891-0.031,4.891V4c0-1.104,0.896-2,2.002-2h20.026  C23.104,2,24,2.896,24,4l-0.016,1C23.984,5,14.031,13,11.984,13z M11.984,15.75c2.141,0,12-7.75,12-7.75L24,20  c0,1.104-0.896,2-2.003,2H1.971c-1.105,0-2.002-0.896-2.002-2l0.016-12C-0.016,8,10.031,15.75,11.984,15.75z" 
    fill="${props?.color||"currentColor"}"
     fill-rule="evenodd"/></svg>`} />
}