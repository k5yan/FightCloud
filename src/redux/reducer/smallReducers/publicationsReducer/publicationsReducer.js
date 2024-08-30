const dataBaseInitialState = {
	allPublications: [],
	recommendedPublications: [],
	followedPublications: [],
};

export const publicationsReducer = (state = dataBaseInitialState, action) => {
	switch (action.type) {
		case 'DOWNLOAD_ALL_PUBLICATIONS': {
			return {
				...state,
				allPublications: action.payload,
			};
		}
		default:
			return state;
	}
};
