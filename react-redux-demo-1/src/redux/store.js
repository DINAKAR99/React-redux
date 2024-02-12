import { legacy_createStore } from "redux";
import cakeReducer from "./cake/cakeReducers";
import { logger } from "redux-logger";
import { applyMiddleware } from "redux";
import rootReducer from "./RootReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
