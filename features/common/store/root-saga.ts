import { all } from "redux-saga/effects";
import { watchFetchFamilies } from "../../family-tree";

export function* rootSaga() {
  yield all([
    watchFetchFamilies(),
  ]);
}