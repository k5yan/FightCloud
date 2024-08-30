export const MainStyles = {
	mainScreen: {
		main: {
			flex: 1,
		},
	},
	cloudPanel: {
		container: {
			borderBottomColor: 'rgba(0, 0, 0, 0.1)',
			borderBottomWidth: 2,
		},
		cloudPanel: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: '47@s',
			marginBottom: '20@s',
			paddingHorizontal: '2@s',
		},
		cloudBackgroundImage: {
			flexDirection: 'row',
			justifyContent: 'center',
			marginTop: '5@s',
			marginBottom: '7@s',
			paddingHorizontal: '14@s',
		},
	},
	searchBar: {
		searchBar: {
			backgroundColor: 'transparent',
			border: '2@s',
			paddingBottom: '4@s',
			paddingTop: '2@s',
			paddingHorizontal: '8@s',
			borderRadius: 10,
			fontSize: '20@s',
			fontFamily: 'PixyFont',
			height: '38@s',
		},
		searchBarContainer: {
			width: '70%',
		},
	},
	rosterList: {
		rosterContainer: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'wrap',
			overflow: 'visible',
			marginTop: '8@s',
		},
	},
	charFrame: {
		charFrameImage: {
			width: '100%',
			height: '100%',
			borderWidth: 1,
			borderColor: 'rgba(0,0,0,0.1)',
			borderRadius: 10,
		},

		charFrameTitle: {
			fontFamily: 'PixyFont',
			fontSize: '20@s',
			color: 'white',
			position: 'absolute',
			bottom: '10@s',
		},
		charFrameContainer: {
			backgroundColor: 'white',
			width: '150@s',
			height: '150@s',
			marginVertical: '8@s',
			marginHorizontal: '8@s',
			borderWidth: 1,
			paddingHorizontal: '7@s',
			paddingVertical: '7@s',
			borderColor: 'rgba(0,0,0,0.1)',
			borderBottomLeftRadius: 18,
			borderBottomRightRadius: 18,
			borderTopLeftRadius: 18,
			borderTopRightRadius: 18,
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
};

export const MainColorPalette = {
	alpha: '#0FBBE8',
	beta: 'white',
	gamma: 'white',
	delta: 'white',
};
