import { combineReducers } from "redux";
import reducerMeet from "./reducerMeet";
import reducerVegetable from "./reducerVegetable";

const rootReducer = combineReducers({
  reducerMeet,
  reducerVegetable,
});

export default rootReducer;
