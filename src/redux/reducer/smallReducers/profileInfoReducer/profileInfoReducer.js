const dataBaseInitialState = {
	id: '',
	avatar: '',
	login: 'guest',
	role: 0,
	title: '',
	isLogin: false,
	userPublications: [],
	userPublicationDraft: {
		text: '',
		image: '',
	},
};

export const profileInfoReducer = (state = dataBaseInitialState, action) => {
	switch (action.type) {
		case 'LOGIN': {
			return {
				...state,
				id: action.payload.id,
				avatar: action.payload.avatar,
				login: action.payload.login,
				title: action.payload.title,
				role: action.payload.role,
				isLogin: true,
			};
		}
		case 'LOGOUT': {
			return dataBaseInitialState;
		}
		case 'EDIT_USER': {
			return {
				...state,
				...action.payload, //передается по разному сформированный объект
			};
		}
		case 'DOWNLOAD_USER_PUBLICATIONS': {
			return {
				...state,
				userPublications: action.payload,
			};
		}
		case 'SAVE_TEXT_DRAFT': {
			return {
				...state,
				userPublicationDraft: {
					...state.userPublicationDraft,
					text: action.payload,
					author: state.nickname,
				},
			};
		}
		case 'CLEAR_DRAFT': {
			return {
				...state,
				userPublicationDraft: dataBaseInitialState.userPublicationDraft,
			};
		}
		default:
			return state;
	}
};
