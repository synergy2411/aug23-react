import * as todoActions from "../actions/todo.actions";

const initialState = {
  isLoading: false,
  todos: [],
};

export default function rootReducer(state = initialState, action) {
  if (action.type === todoActions.SET_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === todoActions.FETCH_TODOS) {
    return {
      isLoading: false,
      todos: action.payload,
    };
  } else if (action.type === todoActions.CREATE_TODO) {
    return {
      todos: [action.payload, ...state.todos],
    };
  }

  return state;
}
