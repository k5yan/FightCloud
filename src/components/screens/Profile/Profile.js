import { View, Image, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../../baseComponents/ActionButton';
import { ACTION_BUTTON_SETTINGS, PROFILE_BUTTON_COLOR } from '../../../constants/icons';
import { profileImagePath } from '../../../constants/imagePath/profileImagePath';
import { TabSelector } from '../../baseComponents/TabSelector';
import { PublicationsList } from '../../baseComponents/PublicationsList/PublicationsList';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

export const Profile = () => {
	const profileColorPalette = {
		alpha: '#008080', //фон
		beta: '#006060', //фон публикаций
		gamma: 'white', //текст, кнопки
		delta: '#2F2F2F', //фон никнейма автора
	};

	const Data = () => <View style={styles.data}></View>;
	const Publications = () => <PublicationsList colorPalette={profileColorPalette} />;
	const screens = [
		{
			name: 'posts',
			component: Publications,
		},
		{
			name: 'data',
			component: Data,
		},
	];

	const profileInfo = {
		nickname: 'k5yan',
		title: 'platform: PC yoshimitsu player',
	};

	return (
		<View style={styles.profileContainer}>
			<View style={styles.profileInfo}>
				<ProfileHeader
					colorPalette={profileColorPalette}
					profileImagePath={profileImagePath}
					profileInfo={profileInfo}
				/>
			</View>
			<View style={styles.contentPicker}>
				<TabSelector
					backgroundColor={profileColorPalette.beta}
					labelColor={{
						focused: profileColorPalette.gamma,
						unfocused: profileColorPalette.delta,
					}}
					screens={screens}
				/>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	profileContainer: {
		flex: 1,
		backgroundColor: '#4d605e',
	},
	profileHeader: {
		backgroundColor: '#008080',
		borderWidth: '4@s',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderColor: '#008080',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		paddingTop: '36@s',
		paddingBottom: '12@s',
		paddingHorizontal: '12@s',
	},
	profilePictureContainer: {
		backgroundColor: 'white',
		width: '96@s',
		height: '96@s',
		borderWidth: '5@s',
		borderRadius: 10,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'cecnter',
	},
	profilePicture: {
		width: '100%',
		height: '100%',
		borderRadius: 6,
	},
	profileNickname: {
		fontFamily: 'PixyFont',
		fontSize: '36@s',
		color: 'white',
	},
	profileNicknameContainer: {
		backgroundColor: '#2F2F2F',
		borderWidth: '2@s',
		borderRadius: 10,
		borderColor: '#2F2F2F',
		paddingLeft: '6@s',
		paddingRight: '2@s',
		paddingVertical: '2@s',
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileTitle: {
		fontFamily: 'PixyFont',
		fontSize: '16@s',
		color: 'white',
	},
	profileTitleContainer: {
		width: '150@s',
		marginTop: '5@s',
	},
	infoBox: {
		height: '96@s',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginLeft: '10@s',
	},
	playerContainer: {
		flexDirection: 'row',
	},
	profileButtonContainer: {
		alignItems: 'flex-end',
	},
	/////////
	profileInfo: {
		backgroundColor: '#006060',
	},
	contentPicker: {
		flex: 1,
		backgroundColor: '#006060',
	},
});
