import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
    reducer: {
        reducer: rootReducer  // or use a more specific name like 'auth' or 'users'
      },
    middleware:()=> middlewares
});

sagaMiddleware.run(rootSaga);
export default store;