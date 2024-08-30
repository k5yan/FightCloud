import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { UserImage } from './UserImage';
import { selectColorPalette } from '../../../../redux/selectors/styles/DiscoverSelectors/DiscoverSelectors';
import { useSelector } from 'react-redux';
import { Bar } from '../../Profile/MidScreen/Publications/Bar.js';

export const DiscoverHeader = () => {
	const colorPalette = useSelector(selectColorPalette);

	return (
		<View style={styles.header}>
			<Bar placeholder={'#EVO2024'} colorPalette={colorPalette} />
			<UserImage />
		</View>
	);
};

const styles = ScaledSheet.create({
	header: {
		justifyContent: 'center',
		flexDirection: 'row',
		marginHorizontal: '12@s',
		marginVertical: '12@s',
		alignItems: 'center',
	},
});
