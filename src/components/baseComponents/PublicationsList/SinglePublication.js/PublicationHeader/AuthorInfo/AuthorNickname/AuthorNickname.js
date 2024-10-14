import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const AuthorNickname = ({ colorPalette, nickname }) => {
	return (
		<View
			style={[
				{
					backgroundColor: colorPalette.delta,
					borderColor: colorPalette.delta,
				},
				styles.authorNicknameContainer,
			]}
		>
			<Text style={[{ color: colorPalette.gamma }, styles.authorNickname]}>
				{nickname}
			</Text>
		</View>
	);
};

const styles = ScaledSheet.create({
	authorNicknameContainer: {
		borderWidth: '1@s',
		borderRadius: 4,
		paddingLeft: '3@s',
		paddingRight: '1@s',
		paddingVertical: '1@s',
		justifyContent: 'center',
		alignItems: 'center',
	},
	authorNickname: {
		// color: 'white',
		fontFamily: 'PixyFont',
		fontSize: '18@s',
	},
});
