import { View, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { SinglePinImage } from './SinglePinImage/SinglePinImage';
import Animated from 'react-native-reanimated';
export const PinImages = ({ pinImages, unpin }) => {
	return (
		<Animated.View style={{ flexDirection: 'row' }}>
			{pinImages.map((image, id) => {
				return <SinglePinImage key={id} image={image} unpin={unpin} />;
			})}
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	publicationPictureContainer: {
		marginVertical: '6@s',
		marginRight: '13@s',
		height: '52@s',
		aspectRatio: '1/1',
	},
	publicationPicture: {
		width: '100%',
		height: '100%',
		borderRadius: 4,
	},
});
