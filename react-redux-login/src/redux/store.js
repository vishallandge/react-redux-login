import { composeWithDevTools } from "redux-devtools-extension";
import {createStore} from "redux";
import {persistStore,persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from './reducer';
const persistConfig = {
    key: 'root',
    storage:storage,
    stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store=createStore(persistedReducer,{},  composeWithDevTools());
export const persistor=persistStore(store);