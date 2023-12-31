import * as fromActions from "../actions/counter.action";

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case fromActions.INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case fromActions.DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case fromActions.ADD_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case fromActions.SUBTRACT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    }
    default:
      return state;
  }
}

export default counterReducer;
