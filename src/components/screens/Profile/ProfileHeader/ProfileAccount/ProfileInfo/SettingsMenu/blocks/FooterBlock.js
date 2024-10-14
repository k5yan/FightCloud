import { View, Text } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../../../../../../../baseComponents/ActionButton';
import {
	ACTION_BUTTON_DELETE,
	ACTION_BUTTON_LOGOUT,
} from '../../../../../../../../constants/icons';
import { ModalAlert } from '../../../../../../../baseComponents/ModalAlert';
import { useState } from 'react';
import { useToast } from 'react-native-toast-notifications';

export const FooterBlock = ({ submit, logout, colorPalette, closeSettings }) => {
	const [alertInfo, setAlertInfo] = useState({});
	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const closeAlert = () => setIsAlertVisible(false);
	const toast = useToast();
	const alertTypes = {
		submit: {
			text: 'submit changes ?',
			onConfirm: () => {
				submit();
				closeAlert();
				closeSettings();
				toast.show('Hello World');
			},
		},
		logout: {
			text: 'you sure want to logout?',
			onConfirm: () => {
				logout();
				closeAlert();
				closeSettings();
			},
		},
		delete: {
			text: [
				'you sure want to',
				<Text key={1} style={{ color: '#E32636' }}>
					{' delete '}
				</Text>,
				'your account ?',
			],
			onConfirm: () => {}, //delete()
		},
	};

	const showAlert = (type) => {
		setAlertInfo(alertTypes[type]);
		setIsAlertVisible(true);
	};

	return (
		<Animated.View style={styles.footerButtonsContainer} layout={LinearTransition}>
			<View style={styles.submitButtonContainer}>
				<View
					style={[
						styles.submitButtonWrapper,
						{
							backgroundColor: colorPalette.alpha,
							borderColor: colorPalette.alpha,
						},
					]}
					layout={LinearTransition}
				>
					<ActionButton
						icon={'Submit'}
						color={colorPalette.delta}
						font={'PixyFont'}
						onPress={() => {
							showAlert('submit');
						}}
						animation={'grow'}
						type={'middleButton'}
					/>
				</View>
			</View>
			<View style={styles.lowerButtonsContainer}>
				<ActionButton
					icon={ACTION_BUTTON_DELETE}
					color={'#E32636'}
					font={'Icons'}
					onPress={() => {
						showAlert('delete');
					}}
					animation={'grow'}
				/>
				<View style={[styles.outButtonContainer]} layout={LinearTransition}>
					<Text style={styles.outButtonLabel}>{'logout'}</Text>
					<ActionButton
						icon={ACTION_BUTTON_LOGOUT}
						color={'#fff'}
						font={'Icons'}
						onPress={() => {
							showAlert('logout');
						}}
						animation={'grow'}
					/>
				</View>
			</View>
			<ModalAlert
				question={alertInfo.text}
				visible={isAlertVisible}
				closeAlert={closeAlert}
				onConfirm={alertInfo.onConfirm}
				colorPalette={colorPalette}
			/>
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	submitButtonWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: '2@s',
		borderRadius: 4,
		paddingVertical: '4@s',
		marginHorizontal: '4@s',
	},
	submitButtonContainer: {
		width: '100%',
	},
	outButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	outButtonLabel: {
		marginRight: '8@s',
		fontFamily: 'PixyFont',
		fontSize: '18@s',
		color: '#F08080',
	},
	lowerButtonsContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginTop: '8@s',
		marginBottom: '4@s',
		paddingHorizontal: '4@s',
	},
	footerButtonsContainer: {
		width: '100%',
		marginTop: '4@s',
		alignItems: 'flex-end',
	},
});
