import { combineReducers } from "redux";
import offerReducer from "./offerReducer";
import neracaReducer from "./neracaReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
    offer: offerReducer,
    neraca: neracaReducer,
    project: projectReducer,
})

export default rootReducer