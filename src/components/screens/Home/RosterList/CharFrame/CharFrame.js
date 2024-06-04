import { Text, View, Image } from 'react-native';
import { imagePath } from '../../../../../constants/imagePath';
import { ScaledSheet } from 'react-native-size-matters';

export const CharFrame = (props) => {
	const nameTitle = props.nameTitle;

	return (
		<View>
			<View style={styles.charFrameContainer}>
				<Image
					style={styles.charFrameImage}
					source={imagePath[nameTitle]}
				></Image>
				<Text style={styles.charFrameTitle}>{nameTitle}</Text>
			</View>
			<View style={styles.volume}></View>
		</View>
	);
};

const styles = ScaledSheet.create({
	charFrameImage: {
		borderRadius: 10,
		width: '100%',
		height: '100%',
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.1)',
	},
	charFrameImageContainer: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		borderWidth: 1,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderColor: 'rgba(0,0,0,0.1)',
		justifyContent: 'center',
		alignItems: 'center',
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
	volume: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderWidth: 8,
		borderColor: '#F8F4FF',
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		width: '150@s',
		height: '150@s',
		top: 4,
		right: 4,
		zIndex: -1,
	},
});
