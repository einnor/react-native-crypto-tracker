import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getCoinsSuccess,
  getCoinsFailure,
  GET_COINS_REQUEST,
} from './actions';

import Api from '../../../services/Api';

export default function* coinsWatcher() {
  yield takeLatest(GET_COINS_REQUEST, getCoins);
}

export function* getCoins(action) {
  try {
    const response = yield call(Api.fetchCoins);

    yield put(getCoinsSuccess(response));
  } catch (error) {
    yield put(getCoinsFailure(error));
  }
}