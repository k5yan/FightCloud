import { combineReducers } from 'redux';
import {
	stylesReducer,
	customMoveListReducer,
	rosterReducer,
	profileInfoReducer,
	publicationsReducer,
} from './smallReducers';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

export const globalReducer = combineReducers({
	styles: stylesReducer,
	customMoveList: customMoveListReducer,
	roster: persistReducer(persistConfig, rosterReducer),
	profileInfo: profileInfoReducer,
	publications: publicationsReducer,
});
