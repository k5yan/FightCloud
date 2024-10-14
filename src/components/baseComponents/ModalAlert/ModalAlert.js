import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../ActionButton';
import Modal from 'react-native-modal';

export const ModalAlert = ({
	question,
	visible,
	closeAlert,
	onConfirm,
	colorPalette,
}) => {
	return (
		<Modal
			isVisible={visible}
			onBackdropPress={() => closeAlert()}
			useNativeDriver={true}
		>
			<View
				style={[
					styles.alertContainer,
					{
						backgroundColor: colorPalette.beta,
						borderColor: colorPalette.delta,
					},
				]}
			>
				<View style={styles.alertTextContainer}>
					<Text style={[styles.alertText, { color: colorPalette.gamma }]}>
						{question}
					</Text>
				</View>
				<View style={styles.alertButtonsContainer}>
					<ActionButton
						icon={'confirm'}
						color={colorPalette.alpha}
						font={'PixyFont'}
						onPress={() => {
							onConfirm();
						}}
						animation={'grow'}
						type={'middleButton'}
					/>
					<ActionButton
						icon={'cancel'}
						color={colorPalette.delta}
						font={'PixyFont'}
						onPress={() => {
							closeAlert();
						}}
						animation={'none'}
						type={'middleButton'}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = ScaledSheet.create({
	alertContainer: {
		borderWidth: '2@s',
		borderRadius: 4,
		padding: '8@s',
	},
	alertText: {
		fontFamily: 'PixyFont',
		fontSize: '20@s',
		marginBottom: '30@s',
	},
	alertTextContainer: {
		width: '100%',
		alignItems: 'center',
	},
	alertConfirmButton: {
		marginHorizontal: '4@s',
	},
	alertCancelButton: {
		marginHorizontal: '4@s',
	},
	alertButtonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
	},
});
