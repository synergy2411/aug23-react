import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./reducers/root.reducer";
import counterReducer from "./reducers/counter.reducer";
import resultReducer from "./reducers/result.reducer";
import logger from "./middlewares/logger";
import thunk from "redux-thunk";

// const store = createStore(rootReducer)

const store = createStore(
  combineReducers({
    ctr: counterReducer,
    res: resultReducer,
  }),
  applyMiddleware(logger, thunk)
);

export default store;
