import { cacheImage } from '../../../../../../../utils/image/cacheImage/cacheImage';
import { setImageSize } from '../../../../../../../utils/image/setImageSize/setImageSize';
export const saveImage = async (imageUri, setCachePath, setAspectRatio) => {
	const imageCachePath = await cacheImage(imageUri, setCachePath);
	setImageSize(imageCachePath, setAspectRatio);
};
