export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";

export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

// ACTION CREATORS
export function addCounter(value) {
  return {
    type: ADD_COUNTER,
    payload: value,
  };
}

export function subtractCounter(value) {
  return {
    type: SUBTRACT_COUNTER,
    payload: value,
  };
}

export function storeResult(value) {
  return {
    type: STORE_RESULT,
    payload: value,
  };
}

export function deleteResult(value) {
  return {
    type: DELETE_RESULT,
    payload: value,
  };
}
