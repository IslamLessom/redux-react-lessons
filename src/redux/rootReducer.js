import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputRedicer";
import { commentsReducer } from "./commentReducer";
export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer
})