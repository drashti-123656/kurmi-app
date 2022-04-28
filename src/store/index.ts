import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas'
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = configureStore({reducer: rootReducer, middleware: middlewares});
sagaMiddleware.run(sagas);

export default store;
