import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

const sagas = {};
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({reducer: rootReducer, middleware: middlewares});

sagaMiddleware.run(sagas);

export default store;
