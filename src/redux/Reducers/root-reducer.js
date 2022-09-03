import { combineReducers } from "redux";
/* Reducers */
import postReducer from "./reducer";
import newReducer from "./newreducer";

const rootReducer = combineReducers({
    data:postReducer,
    new:newReducer
})

export default rootReducer;