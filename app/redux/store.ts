import { createStore, combineReducers, applyMiddleware, Dispatch } from 'redux';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook,useSelector as useReduxSelector, useDispatch as useAppDispatch} from "react-redux";
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
  global: globalReducer
});

const configureStore = () => {
  return createStore(rootReducer,applyMiddleware(thunk));
}
const store = configureStore()
export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export type AppDispatch =  Dispatch<any>; //typeof store.dispatch
export const useDispatch: () => AppDispatch = useAppDispatch 

export default store;