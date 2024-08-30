import { rosterList } from '../../../../databases/rosterList';

const dataBaseInitialState = { roster: rosterList };

export const rosterReducer = (state = dataBaseInitialState, action) => {
	switch (action.type) {
		case 'UPLOAD_ROSTER_LIST': {
			return {
				...state,
				roster: action.payload,
			};
		}
		default:
			return state;
	}
};
