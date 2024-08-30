import { View, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {
	profileImagePath,
	defaultProfileImagePath,
} from '../../../../../constants/imagePath/profileImagePath';
import { selectColorPalette } from '../../../../../redux/selectors/styles/DiscoverSelectors/DiscoverSelectors';
import { selectProfileInfo } from '../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { useSelector } from 'react-redux';

export const UserImage = () => {
	const profileInfo = useSelector(selectProfileInfo);
	const colorPalette = useSelector(selectColorPalette);
	return (
		<View
			style={[
				{ backgroundColor: colorPalette.gamma },
				styles.authorPictureContainer,
			]}
		>
			<Image
				source={profileInfo.isLogin ? profileImagePath : defaultProfileImagePath}
				style={styles.authorPicture}
			/>
		</View>
	);
};

const styles = ScaledSheet.create({
	authorPictureContainer: {
		// backgroundColor: 'white',
		width: '48@s',
		height: '48@s',
		borderWidth: '2@s',
		borderRadius: 4,
		borderColor: 'white',
		marginLeft: '12@s',
	},
	authorPicture: {
		width: '100%',
		height: '100%',
		borderRadius: 3,
	},
});
