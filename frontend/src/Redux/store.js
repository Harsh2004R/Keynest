import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { reducer as AuthReducer } from "./Auth/reducer.js";
const RootReducer = combineReducers({
  AuthReducer,
});
export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));







