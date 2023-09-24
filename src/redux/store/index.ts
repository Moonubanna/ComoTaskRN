import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './../reducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

export default function store() {
  const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
