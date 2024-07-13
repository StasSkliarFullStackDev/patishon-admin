//persist redux
import localStorage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";

//saga redux
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";

//local saga files
import { rootSaga } from './Saga/index'

//reducer
import rootReducer from "./Reducers";

const presistConfig = {
    key: 'root',
    storage:localStorage,
}
const sagaMiddleware = createSagaMiddleware()
const pReducer = persistReducer(presistConfig, rootReducer)
export const Store = createStore(pReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(Store)

