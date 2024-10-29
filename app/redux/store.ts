import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from './todoSlice';

const reducers = combineReducers({
  todo: todoReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // Specify the reducers you want to persist
  // whitelist: ['user'], // In this example, we persist the 'user' reducer
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
