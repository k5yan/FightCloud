import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../../../baseComponents/ActionButton';
import { ProfileAccount } from './ProfileAccount/ProfileAccount';
import {
	ACTION_BUTTON_SETTINGS,
	PROFILE_BUTTON_COLOR,
} from '../../../../constants/icons';

export const ProfileHeader = (props) => {
	return (
		<View
			style={[
				{
					backgroundColor: props.colorPalette.alpha,
					borderColor: props.colorPalette.alpha,
				},
				styles.profileHeader,
			]}
		>
			<ProfileAccount
				colorPalette={props.colorPalette}
				profileImagePath={props.profileImagePath}
				profileInfo={props.profileInfo}
			/>
			<View style={styles.profileButtonContainer}>
				<ActionButton
					icon={ACTION_BUTTON_SETTINGS}
					color={PROFILE_BUTTON_COLOR}
				/>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	profileHeader: {
		// backgroundColor: '#008080',
		borderWidth: '4@s',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		// borderColor: '#008080',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		paddingTop: '36@s',
		paddingBottom: '12@s',
		paddingHorizontal: '12@s',
	},
});
