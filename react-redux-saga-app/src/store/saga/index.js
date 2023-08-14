import { spawn } from "redux-saga/effects";
import todoSaga from "./todo.saga";

export default function* rootSaga() {
  console.log("SAGA CONFIGURED");

  yield spawn(todoSaga);
}
