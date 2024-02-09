import { combineReducers } from "redux";
import MoviesReducer from "./Reducer";
import ProductReducer from "./EcommerceProducer";



export const RootReducers = combineReducers({ MoviesReducer,ProductReducer });