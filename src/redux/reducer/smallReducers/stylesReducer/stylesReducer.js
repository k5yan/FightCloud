import {
	DiscoverStyles,
	DiscoverColorPalette,
	ProfileStyles,
	ProfileColorPalette,
	MainStyles,
	MainColorPalette,
} from './screenStyles';

const stylesInitialState = {
	DiscoverStyles: {
		shapes: DiscoverStyles,
		colorPalette: DiscoverColorPalette,
	},
	ProfileStyles: {
		shapes: ProfileStyles,
		colorPalette: ProfileColorPalette,
	},
	MainStyles: {
		shapes: MainStyles,
		colorPalette: MainColorPalette,
	},
};

export const stylesReducer = (state = stylesInitialState, action) => {
	switch (action.type) {
		case 'UPLOAD_COLOR_PALETTE': {
			return {
				...state,
				styles: action.payload,
			};
		}
		default:
			return state;
	}
};
