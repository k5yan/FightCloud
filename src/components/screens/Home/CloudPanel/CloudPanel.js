import { ImageBackground, View } from 'react-native';
import { ActionButton } from '../../baseComponents/ActionButton';
import { SearchBar } from './SearchBar';
import { AppTitle } from './AppTitle';
import { ScaledSheet } from 'react-native-size-matters';

import {
	ACTION_BUTTON_BURGER,
	ACTION_BUTTON_HELP,
	HOME_BUTTON_COLOR,
} from '../../../../constants/icons';

export const CloudPanel = () => {
	return (
		<View style={styles.container}>
			<AppTitle />
			<ImageBackground
				source={require('../../../../image/CloudBarBackground2.png')}
				resizeMode="cover"
				style={styles.cloudBackgroundImage}
			>
				<View style={styles.cloudPanel}>
					<ActionButton
						icon={ACTION_BUTTON_BURGER}
						iconColor={HOME_BUTTON_COLOR}
					/>
					<SearchBar />
					<ActionButton
						icon={ACTION_BUTTON_HELP}
						iconColor={HOME_BUTTON_COLOR}
					/>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = ScaledSheet.create({
	container: {
		paddingBottom: '5@s',
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
		borderBottomWidth: 2,
		backgroundColor: 'rgb(15, 187, 232)',
	},
	cloudPanel: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '47@s',
		marginBottom: '20@s',
	},
	cloudBackgroundImage: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: '5@s',
		marginHorizontal: '14@s',
	},
});
