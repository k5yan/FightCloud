import { View, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const ProfileImage = (props) => {
	return (
		<View
			style={[
				{
					backgroundColor: props.colorPalette.gamma,
					borderColor: props.colorPalette.gamma,
				},
				styles.profilePictureContainer,
			]}
		>
			<Image source={props.profileImagePath} style={styles.profilePicture}></Image>
		</View>
	);
};

const styles = ScaledSheet.create({
	profilePictureContainer: {
		// backgroundColor: 'white',
		width: '96@s',
		height: '96@s',
		borderWidth: '5@s',
		borderRadius: 10,
		// borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'cecnter',
	},
	profilePicture: {
		width: '100%',
		height: '100%',
		borderRadius: 6,
	},
});
