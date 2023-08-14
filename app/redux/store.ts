import { createStore, combineReducers, applyMiddleware, Dispatch } from 'redux';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook,useSelector as useReduxSelector, useDispatch as useAppDispatch} from "react-redux";
import globalReducer from './globalReducer';
import familyReducer from './familyReducer';
import { GLOBAL_CONSTS } from './constants';

const appReducer = combineReducers({
  global: globalReducer,
  family:familyReducer
});


const rootReducer = (state:any, action:any) => {
  if (action.type === GLOBAL_CONSTS.LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

const configureStore = () => {
  return createStore(rootReducer,applyMiddleware(thunk));
}
const store = configureStore()
export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export type AppDispatch =  Dispatch<any>; //typeof store.dispatch
export const useDispatch: () => AppDispatch = useAppDispatch 

export default store;