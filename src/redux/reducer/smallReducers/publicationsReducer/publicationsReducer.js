const dataBaseInitialState = {
	discoverPublications: [],
	discoverPublicationDraft: {
		text: '',
		image: '',
	},
	recommendedPublications: [],
	followedPublications: [],
	userPublications: [],
	userPublicationDraft: {
		text: '',
		image: '',
	},
	comments: [],
};

export const publicationsReducer = (state = dataBaseInitialState, action) => {
	switch (action.type) {
		case 'DOWNLOAD_DISCOVER_PUBLICATIONS': {
			return {
				...state,
				discoverPublications: action.payload,
			};
		}
		case 'SAVE_DISCOVER_TEXT_DRAFT': {
			return {
				...state,
				discoverPublicationDraft: {
					...state.discoverPublicationDraft,
					text: action.payload,
				},
			};
		}
		case 'CLEAR_DISCOVER_DRAFT': {
			return {
				...state,
				discoverPublicationDraft: dataBaseInitialState.userPublicationDraft,
			};
		}
		case 'DOWNLOAD_USER_PUBLICATIONS': {
			return {
				...state,
				userPublications: action.payload,
			};
		}
		case 'SAVE_USER_TEXT_DRAFT': {
			return {
				...state,
				userPublicationDraft: {
					...state.userPublicationDraft,
					text: action.payload,
				},
			};
		}
		case 'CLEAR_USER_DRAFT': {
			return {
				...state,
				userPublicationDraft: dataBaseInitialState.userPublicationDraft,
			};
		}
		case 'DOWNLOAD_COMMENTS': {
			return {
				...state,
				comments: action.payload,
			};
		}
		default:
			return state;
	}
};
