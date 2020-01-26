
import { createStore, combineReducers, applyMiddleware } from "redux";
import { middlewares } from "./middleware";
import { globalReducer } from "./reducer";

export default createStore(
    combineReducers(globalReducer),
    applyMiddleware(...middlewares)
);