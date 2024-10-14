import { SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { RosterList } from './RosterList';
import { CloudPanel } from './CloudPanel';
import { useSelector } from 'react-redux';
import {
	selectMainScreenStyles,
	selectColorPalette,
} from '../../../redux/selectors/styles/MainSelectors/MainSelectors';
import safeArea from '../../../utils/safeArea/safeArea';
export const Main = () => {
	const mainScreen = useSelector(selectMainScreenStyles);
	const colorPalette = useSelector(selectColorPalette);

	const styles = ScaledSheet.create(mainScreen);

	return (
		<SafeAreaView
			style={[
				{ backgroundColor: colorPalette.alpha },
				styles.main,
				safeArea(colorPalette.alpha).style,
			]}
		>
			<CloudPanel />
			<RosterList />
		</SafeAreaView>
	);
};
