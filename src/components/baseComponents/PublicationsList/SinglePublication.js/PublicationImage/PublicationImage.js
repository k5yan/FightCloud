import { View, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Animated, { LinearTransition, Easing } from 'react-native-reanimated';
export const PublicationImage = (props) => {
	return (
		<>
			{props.imagePath === undefined ? (
				<></>
			) : (
				<Animated.View
					layout={LinearTransition}
					style={styles.publicationPictureContainer}
				>
					<Image source={props.imagePath} style={styles.publicationPicture} />
				</Animated.View>
			)}
		</>
	);
};

const styles = ScaledSheet.create({
	publicationPictureContainer: {
		aspectRatio: '1/1',
	},
	publicationPicture: {
		width: '100%',
		height: '100%',
		borderRadius: 4,
	},
});
