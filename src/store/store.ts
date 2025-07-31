import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '@/features/cart/cartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from '@/services/api';

const rootReducer = combineReducers({
  cart: cartReducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root', //locla storage key
  storage,
  whitelist: ['cart'], //save cart's state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
