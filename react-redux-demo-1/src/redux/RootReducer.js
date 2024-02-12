import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "../User/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  user: userReducer,
});

export default rootReducer;
