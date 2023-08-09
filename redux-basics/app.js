const { createStore } = require("redux");

// REDUCER
function reducer(state = { todos: [], toggle: false }, action) {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  } else if (action.type === "DELETE_ITEM") {
    const filteredTodos = state.todos.filter(
      (todo) => todo.id !== action.payload
    );
    return {
      ...state,
      todos: filteredTodos,
    };
  } else if (action.type === "SWITCH_ON") {
    return {
      ...state,
      toggle: true,
    };
  }
  return state;
}

// STORE
const store = createStore(reducer);

// SUBSCRIPTION
store.subscribe(() => console.log("NEW STATE : ", store.getState()));

let payloadOne = {
  id: "t001",
  label: "pot the plants",
};

// ACTION DISPATCH
store.dispatch({ type: "ADD_ITEM", payload: payloadOne });
// console.log("AFTER ADD ACTION : ", store.getState());

let payloadTwo = {
  id: "t002",
  label: "renew insurance",
};

store.dispatch({ type: "ADD_ITEM", payload: payloadTwo });
// console.log("AFTER SECOND ACTION : ", store.getState());

store.dispatch({ type: "DELETE_ITEM", payload: "t002" });

store.dispatch({ type: "SWITCH_ON" });
