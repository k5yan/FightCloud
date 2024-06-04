import { View, Image, Picker, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../baseComponents/ActionButton';
import { ACTION_BUTTON_SETTINGS, PROFILE_BUTTON_COLOR } from '../../../constants/icons';

export const Profile = () => {
	return (
		<View style={styles.profileContainer}>
			<View style={styles.profileHeader}>
				<View style={styles.profilePicture}></View>
				<View style={styles.profileNicknameContainer}>
					<Text style={styles.profileNickname}>k5yan</Text>
				</View>
				<View style={styles.profileButtonsContainer}>
					<ActionButton
						icon={ACTION_BUTTON_SETTINGS}
						iconColor={PROFILE_BUTTON_COLOR}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	profileContainer: {
		flex: 1,
		backgroundColor: '#e7e7ff',
	},
	profileHeader: {
		backgroundColor: '#008080',
		borderWidth: '4@s',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderColor: '#008080',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingTop: '36@s',
		paddingBottom: '12@s',
		paddingHorizontal: '12@s',
	},
	profilePicture: {
		backgroundColor: 'white',
		width: '96@s',
		height: '96@s',
		borderWidth: '4@s',
		borderRadius: 10,
		borderColor: 'white',
	},
	profileNickname: {
		fontFamily: 'PixyFont',
		fontSize: '36@s',
		color: 'white',
	},
	profileNicknameContainer: {
		backgroundColor: '#2F2F2F',
		borderWidth: 4,
		borderRadius: 10,
		borderColor: '#2F2F2F',
		marginTop: '52@s',
		paddingLeft: 6,
		paddingRight: 2,
		paddingVertical: 2,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '10@s',
	},
	profileButtonsContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});
