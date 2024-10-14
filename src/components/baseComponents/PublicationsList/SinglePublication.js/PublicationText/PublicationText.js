import { TextInput, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ActionButton } from '../../../ActionButton';
import {
	ACTION_BUTTON_COMPLETE,
	ACTION_BUTTON_CANCEL,
} from '../../../../../constants/icons';
import editPublication from './editPublication/editPublication';
import { useToast } from 'react-native-toast-notifications';

export const PublicationText = (props) => {
	const [textValue, setTextValue] = useState(props.text);
	const startValue = props.text;

	const cancelEdit = () => {
		setTextValue(startValue);
	};

	const styleChanger = {
		true: {
			publicationTextContainer: styles.publicationTextEditingContainer,
			publicationText: styles.publicationEditingText,
		},
		false: {
			publicationTextContainer: styles.publicationTextContainer,
			publicationText: styles.publicationText,
		},
	};
	const toast = useToast();

	return (
		<Animated.View
			layout={LinearTransition}
			style={[
				styleChanger[props.editing].publicationTextContainer,
				{
					borderColor: props.colorPalette.alpha,
				},
			]}
		>
			<TextInput
				style={[
					styleChanger[props.editing].publicationText,
					{
						color: props.colorPalette.gamma,
					},
				]}
				multiline={true}
				value={textValue}
				onChangeText={(text) => {
					setTextValue(text);
				}}
				onBlur={() => {
					// dispatch({ type: 'SAVE_TEXT_DRAFT', payload: inputValue });
				}}
				editable={props.editing}
			/>
			{props.editing && (
				<View>
					<View>
						<ActionButton
							icon={ACTION_BUTTON_COMPLETE}
							color={props.colorPalette.gamma}
							font={'Icons'}
							onPress={async () => {
								try {
									textValue.trim() !== startValue &&
										editPublication(
											textValue,
											props.id,
											toast,
											props.colorPalette,
										);
									props.edit();
								} catch (error) {
									console.log('ACTION_BUTTON_COMPLETE_EDIT: ', error);
								}
							}}
							animation={'grow'}
						/>
					</View>
					<View style={styles.cancelButton}>
						<ActionButton
							icon={ACTION_BUTTON_CANCEL}
							color={props.colorPalette.gamma}
							font={'Icons'}
							onPress={async () => {
								try {
									cancelEdit();
								} catch (error) {
									console.log('ACTION_BUTTON_CANCEL_EDIT: ', error);
								}
							}}
							animation={'grow'}
						/>
					</View>
				</View>
			)}
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	publicationTextEditingContainer: {
		flex: 1,
		flexDirection: 'row',
		borderWidth: '2@s',
		borderRadius: 10,
		marginVertical: '8@s',
		paddingVertical: '6@s',
		paddingRight: '6@s',
		paddingLeft: '6@s',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		overflow: 'hidden',
	},
	publicationEditingText: {
		flex: 1,
		fontFamily: 'sans-serif-medium',
		fontSize: '15@s',
		textAlignVertical: 'top',
		textAlign: 'left',
	},
	publicationTextContainer: {
		paddingTop: '6@s',
		paddingLeft: '8@s',
		marginTop: '8@s',
		marginBottom: '24@s',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		overflow: 'hidden',
	},
	publicationText: {
		fontFamily: 'sans-serif-medium',
		fontSize: '15@s',
	},
	cancelButton: {
		marginTop: '6@s',
		// marginRight: '2@s',
	},
});
