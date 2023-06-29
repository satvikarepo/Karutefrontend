import { SvgXml } from 'react-native-svg';

interface IUserSvg{
 w?:string|number,
 h?:string|number,
 color?:string
}

export const IconCalendar=(props?:IUserSvg)=>{
    return <SvgXml xml={`<svg id="Layer_1" fill="${props?.color||"currentColor"}"
    width="${props?.w||40}px" height="${props?.h||40}px" 
    style="enable-background:new 0 0 1024 1024;" version="1.1" 
    viewBox="0 0 1024 1024" xml:space="preserve" 
    ><g id="XMLID_36_"><path d="M99,363.3v485.1c0,32.2,26.2,58.4,58.4,58.4h708.7c32.5,0,58.9-26.4,58.9-58.9V363.3H99z M330,779.3h-78   v-40h78V779.3z M330,647.3h-78v-40h78V647.3z M333,514.3h-78v-40h78V514.3z M548,779.3h-77v-40h77V779.3z M548,647.3h-77v-40h77   V647.3z M551,514.3h-77v-40h77V514.3z M767,647.3h-78v-40h78V647.3z M770,514.3h-78v-40h78V514.3z" id="XMLID_414_"/><path d="M925,235.2v88.1H99v-88.6c0-31.9,26-57.9,57.9-57.9H261v-59.5h80v59.5h340v-58.5h80v58.5h105.6   C898.8,176.8,925,203,925,235.2z" id="XMLID_411_"/></g><g id="XMLID_1_"/>
    <g id="XMLID_2_"/><g id="XMLID_3_"/><g id="XMLID_4_"/><g id="XMLID_5_"/></svg>`}
     />
}
