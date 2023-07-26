import { ModelType } from "../../common/types";
import {GLOBAL_CONSTS} from "../constants";

export const startLoading=()=>({
    type:GLOBAL_CONSTS.LOADING_START,
    payload:undefined
});
export const stopLoading=()=>({
    type:GLOBAL_CONSTS.LOADING_STOP,
    payload:undefined
});
export const toggleLoading=()=>({
    type:GLOBAL_CONSTS.LOADING_TOGGLE,
    payload:undefined
});

export const showModel=(content:JSX.Element)=>({
    type:GLOBAL_CONSTS.MODEL,
    payload:{modelContent:content}
});
export const closeModel=()=>({
    type:GLOBAL_CONSTS.CLOSEMODEL,
    payload:undefined
});