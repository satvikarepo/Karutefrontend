import { ActionType, GlobalStore, User } from "../common/types";
import { GLOBAL_CONSTS } from "./constants";

const initState: GlobalStore = {
    loading: false,
    loggedIn:false,
    user: undefined
}

const globalReducer = (state = initState, action: ActionType<User>): GlobalStore => {
    switch (action.type) {
        case GLOBAL_CONSTS.LOGIN_SUCCESS:
            return { ...state, loading: false, loggedIn:true, user: action.payload }
        case GLOBAL_CONSTS.LOGOUT:
            return { ...state, loggedIn:false, loading: false, user: undefined }
        case GLOBAL_CONSTS.LOADING_START:
            return { ...state, loading: true }
        case GLOBAL_CONSTS.LOADING_STOP:
            return { ...state, loading: false }
        case GLOBAL_CONSTS.LOADING_TOGGLE:
            return { ...state, loading: !state.loading }
        default:
            return state;
    }
}

export default globalReducer;