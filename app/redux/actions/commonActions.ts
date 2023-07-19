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
