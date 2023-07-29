import { ActionType, GlobalStore, User, ModelType } from "../common/types";
import { GLOBAL_CONSTS } from "./constants";

const initState: GlobalStore = {
    loading: false,
    loggedIn: false,
    tempToken: undefined,
    user: undefined,
    model: {
        type: undefined,
        messages: [],
        modelContent: undefined
    }
}

const globalReducer = (state = initState, action: ActionType<User | ModelType>): GlobalStore => {
    switch (action.type) {
        case GLOBAL_CONSTS.LOGIN_SUCCESS:
            return { ...state, loading: false, loggedIn: true, user: action.payload as User }
        case GLOBAL_CONSTS.LOGOUT:
            return { ...state, loggedIn: false, loading: false, tempToken: undefined, user: undefined }
        case GLOBAL_CONSTS.SET_TEMP_TOKEN:
            const tempUser=action.payload as User
            return { ...state, loading: false, tempToken: tempUser.token}
        case GLOBAL_CONSTS.LOADING_START:
            return { ...state, loading: true }
        case GLOBAL_CONSTS.LOADING_STOP:
            return { ...state, loading: false }
        case GLOBAL_CONSTS.LOADING_TOGGLE:
            return { ...state, loading: !state.loading }
        case GLOBAL_CONSTS.ALERT:
            const objErr = action.payload as ModelType;
            return {
                ...state, loading: false, model: {
                    ...state.model, type: objErr.type,
                    messages: objErr.messages
                }
            }
        case GLOBAL_CONSTS.CLOSEMODEL:
            return {
                ...state, loading: false, model: {
                    ...state.model, type: undefined,
                    messages: [], modelContent: undefined
                }
            }
        case GLOBAL_CONSTS.MODEL:
            const objModel = action.payload as ModelType;
            return { ...state, loading: false, model: { ...state.model, modelContent: objModel.modelContent } }
        default:
            return state;
    }
}

export default globalReducer;