import { all } from 'redux-saga/effects';
import coinsWatcher from '../containers/Home/store/sagas';

export default function* rootSaga() {
  yield all([
    coinsWatcher(),
  ]);
}