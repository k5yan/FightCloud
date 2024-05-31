export const stylesInitialState = {
	styles:
};

export const stylesReducer = (state = stylesInitialState, action) => {
	switch (action.type) {
		case 'UPLOAD_STYLES': {
			return {
				...state,
				styles: action.payload
			}
		}
		default:
			return state;
	}
};
