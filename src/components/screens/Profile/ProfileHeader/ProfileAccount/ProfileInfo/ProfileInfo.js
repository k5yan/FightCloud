import { View, Image, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const ProfileInfo = (props) => {
	return (
		<View style={styles.infoBox}>
			<View style={styles.profileTitleContainer}>
				<Text style={[{ color: props.colorPalette.gamma }, styles.profileTitle]}>
					{props.profileInfo.title}
				</Text>
			</View>
			<View
				style={[
					{
						backgroundColor: props.colorPalette.delta,
						borderColor: props.colorPalette.delta,
					},
					styles.profileNicknameContainer,
				]}
			>
				<Text
					style={[{ color: props.colorPalette.gamma }, styles.profileNickname]}
				>
					{props.profileInfo.nickname}
				</Text>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	profileNickname: {
		fontFamily: 'PixyFont',
		fontSize: '36@s',
		// color: 'white',
	},
	profileNicknameContainer: {
		// backgroundColor: '#2F2F2F',
		borderWidth: '2@s',
		borderRadius: 10,
		// borderColor: '#2F2F2F',
		paddingLeft: '6@s',
		paddingRight: '2@s',
		paddingVertical: '2@s',
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileTitle: {
		fontFamily: 'PixyFont',
		fontSize: '16@s',
		// color: 'white',
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
});
