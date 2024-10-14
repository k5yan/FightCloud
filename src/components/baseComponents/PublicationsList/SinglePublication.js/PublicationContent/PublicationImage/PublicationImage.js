import { Image } from 'expo-image';
import { saveImage } from './saveImage/saveImage';
import { ScaledSheet } from 'react-native-size-matters';
import Animated, { LinearTransition, Easing } from 'react-native-reanimated';
import { serverAdress } from '../../../../../../constants/routes';
import { useEffect, useState } from 'react';
export const PublicationImage = (props) => {
	const [aspectRatio, setAspectRatio] = useState('');
	const [cachePath, setCachePath] = useState('');

	const handleRatio = (data) => {
		setAspectRatio(data);
	};

	const handlePath = (data) => {
		setCachePath(data);
	};

	const [width, height] = aspectRatio.split('/').map(Number);
	const lowImage = height * 1.6 < width;

	const styles = ScaledSheet.create(props.style);

	const imageURL = `${serverAdress}/publications/${props.id}/photo/${props.image}`;

	useEffect(() => {
		saveImage(imageURL, handlePath, handleRatio);
	}, []);

	return (
		<Animated.View layout={LinearTransition} style={styles.container}>
			{aspectRatio && cachePath && (
				<Image
					source={cachePath}
					style={[
						styles.picture,
						{
							height: lowImage ? '100%' : 'auto',
							aspectRatio: aspectRatio,
						},
					]}
					contentFit={'cover'}
					contentPosition={'center'}
				/>
			)}
		</Animated.View>
	);
};

const style = ScaledSheet.create({
	container: {
		flex: 1,
		marginBottom: '4@s',
		maxHeight: '227@s',
		overflow: 'hidden',
	},
	picture: {
		width: '100%',
		height: '100%',
		borderTopLeftRadius: 4,
	},
});
