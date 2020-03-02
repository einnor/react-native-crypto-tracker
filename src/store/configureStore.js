import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';


import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      applyMiddleware(
        sagaMiddleware,
        createLogger(),
      )
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
