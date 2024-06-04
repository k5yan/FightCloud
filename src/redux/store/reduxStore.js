import { thunk } from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {
	BaseMoveListReducer,
	CustomMoveListReducer,
	ProfileInfoReducer,
	ProfileStylesReducer,
	StylesReducer,
} from '../reducers';

const reducer = combineReducers({
	baseMoveList: BaseMoveListReducer,
	customMoveList: CustomMoveListReducer,
	profileInfo: ProfileInfoReducer,
	profileStyles: ProfileStylesReducer,
	styles: StylesReducer,
});
