import { Asset } from 'expo-asset';
import { profileImagePath } from '../../../../../constants/imagePath/profileImagePath';
export const defaultAvatar = () => {
	const profileImageSource = Asset.fromModule(profileImagePath);
	return {
		uri: profileImageSource.uri,
		name: profileImageSource.name,
		type: 'image/jpeg',
	};
};
