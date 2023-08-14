import { put, call, takeEvery } from "redux-saga/effects";
import * as todoActions from "../actions/todo.actions";
import { fetchTodos } from "../api/todo.api";

// put() -> will dispatch the action
// call() -> makes the API call

function* fetchAllTodos() {
  yield put({ type: todoActions.SET_LOADING });

  const todos = yield call(fetchTodos);

  yield put({ type: todoActions.FETCH_TODOS, payload: todos });
}

export default function* todoSaga() {
  yield takeEvery("FETCH_ALL_TODOS", fetchAllTodos);
}
