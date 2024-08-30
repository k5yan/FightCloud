import { ImageBackground, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ActionButton } from '../../../baseComponents/ActionButton';
import { SearchBar } from './SearchBar';
import { AppTitle } from '../../../baseComponents/AppTitle';
import { ScaledSheet } from 'react-native-size-matters';
import {
	selectColorPalette,
	selectCloudPanelStyles,
} from '../../../../redux/selectors/styles/MainSelectors/MainSelectors';
import {
	ACTION_BUTTON_BURGER,
	ACTION_BUTTON_HELP,
	HOME_BUTTON_COLOR,
} from '../../../../constants/icons';

export const CloudPanel = () => {
	const colorPalette = useSelector(selectColorPalette);
	const cloudPanel = useSelector(selectCloudPanelStyles);

	const styles = ScaledSheet.create(cloudPanel);

	return (
		<View style={[{ backgroundColor: colorPalette.alpha }, styles.container]}>
			<AppTitle title={'fightcloud'} />
			<ImageBackground
				source={require('../../../../image/HomeScreen/CloudBarBackground2.png')}
				resizeMode="cover"
				style={styles.cloudBackgroundImage}
			>
				<View style={styles.cloudPanel}>
					<ActionButton
						font={'Icons'}
						icon={ACTION_BUTTON_BURGER}
						color={HOME_BUTTON_COLOR}
						animation={'grow'}
					/>
					<SearchBar />
					<ActionButton
						font={'Icons'}
						icon={ACTION_BUTTON_HELP}
						color={HOME_BUTTON_COLOR}
						animation={'rotation'}
					/>
				</View>
			</ImageBackground>
		</View>
	);
};
