import { View, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import {
	selectColorPalette,
	selectImageStyles,
} from '../../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';

export const ProfileImage = (props) => {
	const colorPalette = useSelector(selectColorPalette);
	const imageStyles = useSelector(selectImageStyles);
	const styles = ScaledSheet.create(imageStyles);
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
			<Image source={props.profileImagePath} style={styles.profilePicture}></Image>
		</View>
	);
};
