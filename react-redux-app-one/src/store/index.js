import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducers/root.reducer";
import counterReducer from "./reducers/counter.reducer";
import resultReducer from "./reducers/result.reducer";
import logger from "./middlewares/logger";
import thunk from "redux-thunk";

// const store = createStore(rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ctr: counterReducer,
    res: resultReducer,
  }),
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
