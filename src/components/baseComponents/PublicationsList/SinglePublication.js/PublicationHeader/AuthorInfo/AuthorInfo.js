import { View, Text, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const AuthorInfo = (props) => {
	return (
		<View style={styles.authorInfoContainer}>
			<View
				style={[
					{ backgroundColor: props.colorPalette.gamma },
					styles.authorPictureContainer,
				]}
			>
				<Image source={props.author.image} style={styles.authorPicture} />
			</View>
			<View
				style={[
					{
						backgroundColor: props.colorPalette.delta,
						borderColor: props.colorPalette.delta,
					},
					styles.authorNicknameContainer,
				]}
			>
				<Text
					style={[{ color: props.colorPalette.gamma }, styles.authorNickname]}
				>
					{props.author.nickname}
				</Text>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	authorPictureContainer: {
		// backgroundColor: 'white',
		width: '48@s',
		height: '48@s',
		borderWidth: '2@s',
		borderRadius: 4,
		borderColor: 'white',
	},
	authorPicture: {
		width: '100%',
		height: '100%',
		borderRadius: 3,
	},
	authorNicknameContainer: {
		// backgroundColor: '#2F2F2F',
		borderWidth: '1@s',
		borderRadius: 4,
		// borderColor: '#2F2F2F',
		paddingLeft: '3@s',
		paddingRight: '1@s',
		paddingVertical: '1@s',
		marginLeft: '6@s',
		justifyContent: 'center',
		alignItems: 'center',
	},
	authorNickname: {
		// color: 'white',
		fontFamily: 'PixyFont',
		fontSize: '18@s',
	},
	authorInfoContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
});
