import { Image as RNImage } from 'react-native';
export const setImageSize = (imageCachePath, setAspectRatio) => {
	if (imageCachePath) {
		RNImage.getSize(imageCachePath, (width, height) =>
			setAspectRatio(`${width}/${height}`),
		);
	}
};
