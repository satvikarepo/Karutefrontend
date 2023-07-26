import { ModelType } from "../../common/types";
import { GLOBAL_CONSTS } from "../constants";

export const startLoading = () => ({
    type: GLOBAL_CONSTS.LOADING_START,
    payload: undefined
});
export const stopLoading = () => ({
    type: GLOBAL_CONSTS.LOADING_STOP,
    payload: undefined
});
export const toggleLoading = () => ({
    type: GLOBAL_CONSTS.LOADING_TOGGLE,
    payload: undefined
});
export const showError = (msg: string[]) => {
    const data = {type:'error', messages:msg} as ModelType;
    return {
         type: GLOBAL_CONSTS.ALERT,
         payload: data
     }
}
export const showWarning = (msg: string[]) => {
    const data = {type:'warning', messages:msg} as ModelType;
    return {
         type: GLOBAL_CONSTS.ALERT,
         payload: data
     }
}
export const showInfo = (msg: string[]) => {
    const data = {type:'info', messages:msg} as ModelType;
    return {
         type: GLOBAL_CONSTS.ALERT,
         payload: data
     }
}
export const showModel = (content: JSX.Element) => ({
    type: GLOBAL_CONSTS.MODEL,
    payload: { modelContent: content }
});
export const closeModel = () => ({
    type: GLOBAL_CONSTS.CLOSEMODEL,
    payload: undefined
});