import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootRedicer from '../reducer';
import rootSaga from '../saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootRedicer,
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

export const sagaRun = () => {
    sagaMiddleware.run(rootSaga);
};

export default store;