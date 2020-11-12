import { all } from "redux-saga/effects";
import searchSaga from "./search/saga";

export default function* saga() {
  yield all([searchSaga()]);
}
