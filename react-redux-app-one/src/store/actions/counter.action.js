export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";

// ACTION CREATORS
export function addCounter(value) {
  return {
    type: ADD_COUNTER,
    payload: value,
  };
}
