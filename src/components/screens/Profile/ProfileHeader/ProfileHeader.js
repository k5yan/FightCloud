import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ProfileAccount } from './ProfileAccount/ProfileAccount';

import {
	selectColorPalette,
	selectHeaderStyles,
} from '../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { useSelector } from 'react-redux';

export const ProfileHeader = () => {
	const headerStyles = useSelector(selectHeaderStyles);
	const colorPalette = useSelector(selectColorPalette);
	const styles = ScaledSheet.create(headerStyles);

	return (
		<View
			style={[
				{
					backgroundColor: colorPalette.alpha,
					borderColor: colorPalette.alpha,
				},
				styles.profileHeader,
			]}
		>
			<ProfileAccount />
		</View>
	);
};
