import { createStore, combineReducers } from "redux";
import rootReducer from "./reducers/root.reducer";
import counterReducer from "./reducers/counter.reducer";
import resultReducer from "./reducers/result.reducer";

// const store = createStore(rootReducer)

const store = createStore(
  combineReducers({
    ctr: counterReducer,
    res: resultReducer,
  })
);

export default store;
