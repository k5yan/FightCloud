export const ProfileStyles = {
	mainScreen: {
		profileContainer: {
			flex: 1,
			backgroundColor: '#4d605e',
		},
		profileInfo: {
			zIndex: 2,
			backgroundColor: '#006060',
		},
		contentPicker: {
			flex: 1,
			backgroundColor: '#006060',
		},
	},
	profileHeader: {
		profileHeader: {
			borderWidth: '4@s',
			borderBottomLeftRadius: 20,
			borderBottomRightRadius: 20,
			flexDirection: 'row',
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			paddingTop: '4@s',
			paddingBottom: '12@s',
			paddingHorizontal: '12@s',
		},
	},
	profileInfo: {
		profileNickname: {
			fontFamily: 'PixyFont',
			fontSize: '34@s',
		},
		profileNicknameContainer: {
			borderWidth: '2@s',
			borderRadius: 10,
			paddingLeft: '6@s',
			paddingRight: '2@s',
			paddingVertical: '2@s',
			justifyContent: 'center',
			alignItems: 'center',
		},
		profileTitle: {
			fontFamily: 'PixyFont',
			fontSize: '16@s',
		},
		profileTitleContainer: {
			width: '150@s',
			marginTop: '5@s',
		},
		infoBox: {
			flex: 1,
			height: '96@s',
			justifyContent: 'space-between',
			alignItems: 'flex-start',
			marginLeft: '10@s',
		},
		infoBoxHeader: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'flex-start',
		},
	},
	profileImage: {
		profilePictureContainer: {
			width: '96@s',
			height: '96@s',
			borderWidth: '5@s',
			borderRadius: 10,
			justifyContent: 'center',
			alignItems: 'center',
		},
		profilePicture: {
			width: '100%',
			height: '100%',
			borderRadius: 6,
		},
	},
	searchBar: {
		searchBarContainer: {
			backgroundColor: 'red',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			paddingHorizontal: '12@s',
			marginTop: '8@s',
			// marginTop: '8@s',
			// marginBottom: '4@s',
			// marginHorizontal: '4@s',
			// borderRadius: 10,
		},
		searchBar: {
			// height: '30@s',
			width: '100%',
			fontSize: '20@s',
			fontFamily: 'PixyFont',
			textAlignVertical: 'top',
			textAlign: 'left',
			lineHeight: '40@s',
		},
	},
};

export const ProfileColorPalette = {
	alpha: '#008080', //фон
	beta: '#006060', //фон публикаций
	gamma: 'white', //текст, кнопки
	delta: '#2F2F2F', //фон никнейма автора
};
