import { ActionButton } from '../../../ActionButton';
import { Image } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';
import { ACTION_BUTTON_CANCEL } from '../../../../../constants/icons';
export const SinglePinImage = ({ image, unpin }) => {
	return (
		<Animated.View
			style={styles.publicationPictureContainer}
			layout={LinearTransition}
		>
			<Image source={{ uri: image }} style={styles.publicationPicture} />
			<Animated.View
				style={[
					styles.removeButton,
					{ backgroundColor: '#2F2F2F', borderColor: '#2F2F2F' },
				]}
			>
				<ActionButton
					icon={ACTION_BUTTON_CANCEL}
					color={'#A9A9A9'}
					font={'Icons'}
					onPress={async () => {
						try {
							unpin(image);
							console.log('pressed');
						} catch (error) {
							console.log('ACTION_BUTTON_REMOVE_ATTACHED_IMAGE: ', error);
						}
					}}
					animation={'grow'}
					type={'smallButton'}
				/>
			</Animated.View>
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	publicationPictureContainer: {
		// flex: 1,
		marginVertical: '9@s',
		marginRight: '13@s',
		height: '52@s',
		aspectRatio: '1/1',
	},
	publicationPicture: {
		width: '100%',
		height: '100%',
		borderRadius: 4,
	},
	removeButton: {
		borderRadius: '90@s',
		borderWidth: `2@s`,
		position: 'absolute',
		left: `42@s`,
		bottom: '42@s',
	},
});
