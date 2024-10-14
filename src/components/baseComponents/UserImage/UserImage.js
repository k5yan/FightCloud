import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { selectProfileInfo } from '../../../redux/selectors/data/ProfileSelectors/ProfileSelectors';
import { selectColorPalette } from '../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { cacheImage } from '../../../utils/image/cacheImage/cacheImage';
import { defaultProfileImagePath } from '../../../constants/imagePath/profileImagePath';
import { serverAdress } from '../../../constants/routes';

export const UserImage = ({ userData, type, style }) => {
	const profileInfo = useSelector(selectProfileInfo);
	const colorPalette = useSelector(selectColorPalette);
	const styles = ScaledSheet.create(style);
	const userId = userData.userId;
	const userImage = userData.image;
	const [cachePath, setCachePath] = useState('');
	const handlePath = (data) => {
		setCachePath(data);
	};
	const imageURL = `${serverAdress}/user/${userId}/avatar/${userImage}`;
	// console.log('----------------------------------------------------------\n');
	// console.log('profileInfo: ');
	// console.log('profileInfoAvatar: ', profileInfo.avatar);
	// console.log(`avatarOfPublication: ${userData.image}`);
	// console.log('typeOfImage: ', type);
	// console.log('imageURL: ', imageURL);
	// console.log('cachePath: ', cachePath);
	// console.log('----------------------------------------------------------\n');

	useEffect(() => {
		cacheImage(imageURL, handlePath);
	}, [userData]);

	const showImage = {
		avatar: userData.isLogin ? cachePath : defaultProfileImagePath,
		avatarChanger: userData.isChanged ? userImage : cachePath,
		publication: cachePath || defaultProfileImagePath, //проверить, нужно ли
	};

	return (
		<View
			style={[
				{
					backgroundColor: colorPalette.gamma,
					borderColor: colorPalette.gamma,
				},
				styles.profilePictureContainer,
			]}
		>
			<Image
				source={showImage[type]}
				style={styles.profilePicture}
				contentFit={'cover'}
				contentPosition={'center'}
			/>
		</View>
	);
};
