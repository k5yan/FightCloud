import { Platform } from 'react-native';
import { Image } from 'expo-image';

export const cacheImage = async (imageUri, setCachePath) => {
	let imageCachePath;
	try {
		imageCachePath = await Image.getCachePathAsync(imageUri);
		if (!imageCachePath) {
			await Image.prefetch(imageUri);
			imageCachePath = await Image.getCachePathAsync(imageUri);
			if (imageCachePath) {
				if (Platform.OS === 'android')
					imageCachePath = 'file://' + imageCachePath;
				setCachePath(imageCachePath);
			}
		}
		if (imageCachePath) {
			if (Platform.OS === 'android') imageCachePath = 'file://' + imageCachePath;
			setCachePath(imageCachePath);
		}
	} catch (error) {
		console.log('prefetchImage: ', error);
	}
	return imageCachePath;
};
