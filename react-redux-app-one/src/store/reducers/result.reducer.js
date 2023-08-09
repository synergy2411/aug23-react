import * as fromActions from "../actions/counter.action";

const initialState = {
  result: [],
};

function resultReducer(state = initialState, action) {
  switch (action.type) {
    case fromActions.STORE_RESULT: {
      return {
        ...state,
        result: [action.payload, ...state.result],
      };
    }
    case fromActions.DELETE_RESULT: {
      let duplicateResult = [...state.result];
      duplicateResult.splice(action.payload, 1);

      return {
        ...state,
        result: duplicateResult,
      };
    }
    default:
      return state;
  }
}

export default resultReducer;
