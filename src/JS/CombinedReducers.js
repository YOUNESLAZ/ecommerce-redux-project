import { combineReducers } from "redux";
import MoviesReducer from "./Reducer";
import ProductReducer from "./EcommerceProducer";
import { TasklistReducer } from "./TasklistReducer";


export const RootReducers = combineReducers({ MoviesReducer,ProductReducer,TasklistReducer});