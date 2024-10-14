import { View } from 'react-native';
import { ActionButton } from '../../../../../../../baseComponents/ActionButton';
import { ACTION_BUTTON_BACK } from '../../../../../../../../constants/icons';
import { ScaledSheet } from 'react-native-size-matters';
import { Label } from './parts';

export const HeaderBlock = ({ closeSettings }) => {
	return (
		<View style={styles.mainLabelContainer}>
			<Label text={'settings'} type={'main'} />
			<View style={styles.backButtonContainer}>
				<ActionButton
					icon={ACTION_BUTTON_BACK}
					color={'white'}
					font={'Icons'}
					onPress={() => {
						closeSettings();
					}}
					animation={'none'}
					type={'invertMiddleButton'}
				/>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	backButtonContainer: {
		position: 'absolute',
		right: '4@s',
	},
	mainLabelContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: '4@s',
	},
});
