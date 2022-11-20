import { FamilyTreeActionTypes } from './types';
import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Workers
 */
export function* fetchFamilies() {
  yield delay(1000)
  yield console.log('increment')
  yield put({ type: FamilyTreeActionTypes.FETCH_FAMILIES_SUCCESS })
}

/**
 * Watchers
 */
export function* watchFetchFamilies() {
  yield takeEvery(FamilyTreeActionTypes.FETCH_FAMILIES_REQUEST, fetchFamilies)
}