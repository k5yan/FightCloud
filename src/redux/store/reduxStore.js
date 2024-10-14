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
import reactotron from '../../../ReactotronConfig';

export const store = configureStore({
	reducer: globalReducer,
	enhancers: (getDefaultEnhancers) =>
		__DEV__ ? getDefaultEnhancers().concat(reactotron.createEnhancer()) : [],
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				immutableCheck: false,
			},
		}),
});
export const persistedStore = persistStore(store);
