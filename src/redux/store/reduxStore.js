import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { globalReducer } from '../reducer/globalReducer';
export const store = configureStore({
	reducer: globalReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export const persistedStore = persistStore(store);
