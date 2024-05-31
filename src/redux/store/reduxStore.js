import { thunk } from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware} from 'redux';
import { dataBaseReducer } from '../reducers/dataBaseReducer';

const reducer = combineReducers({
	dataBase: dataBaseReducer,
	styles:
});
