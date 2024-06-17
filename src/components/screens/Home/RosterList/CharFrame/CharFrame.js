import { Text, View, Image, Animated } from 'react-native';
import { charFrameImagePath } from '../../../../../constants/imagePath/charFrameImagePath';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';

export const CharFrame = (props) => {
	const nameTitle = props.nameTitle;

	return (
		<RectButton rippleColor={'transparent'}>
			<View style={styles.charFrameContainer}>
				<Image
					style={styles.charFrameImage}
					source={charFrameImagePath[nameTitle]}
				></Image>
				<Text style={styles.charFrameTitle}>{nameTitle}</Text>
			</View>
		</RectButton>
	);
};

const styles = ScaledSheet.create({
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
});
