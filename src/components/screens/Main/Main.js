import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { RosterList } from './RosterList';
import { CloudPanel } from './CloudPanel';
import { useSelector } from 'react-redux';
import {
	selectMainScreenStyles,
	selectColorPalette,
} from '../../../redux/selectors/styles/MainSelectors/MainSelectors';

export const Main = () => {
	const mainScreen = useSelector(selectMainScreenStyles);
	const colorPalette = useSelector(selectColorPalette);

	const styles = ScaledSheet.create(mainScreen);

	return (
		<View style={[{ backgroundColor: colorPalette.alpha }, styles.main]}>
			<CloudPanel />
			<RosterList />
		</View>
	);
};
