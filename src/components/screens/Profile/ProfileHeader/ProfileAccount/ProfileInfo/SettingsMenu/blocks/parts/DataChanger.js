import { View, TextInput, Vibration } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';
import { useState } from 'react';
import { ActionButton } from '../../../../../../../../baseComponents/ActionButton';
import {
	ACTION_BUTTON_CANCEL,
	ACTION_BUTTON_COMPLETE,
	ACTION_BUTTON_EDIT,
} from '../../../../../../../../../constants/icons';
export const DataChanger = ({
	initialTextValue,
	textValue,
	handleText,
	editingCounter,
	colorPalette,
	type,
}) => {
	const [textInputValue, setTextInputValue] = useState(textValue);
	const [isEditing, setIsEditing] = useState(false);

	const styles = ScaledSheet.create({
		textInputEditingContainer: {
			flexDirection: 'row',
			borderWidth: '2@s',
			borderRadius: 10,
			borderColor: '#2F2F2F',
			marginBottom: '4@s',
			marginHorizontal: '4@s',
			paddingVertical: '2@s',
			paddingRight: '6@s',
			paddingLeft: '6@s',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			overflow: 'hidden',
		},
		textInputEditing: {
			flex: 1,
			fontFamily: 'PixyFont',
			fontSize: '20@s',
			marginTop: '4@s',
			marginBottom: '4@s',
			textAlignVertical: 'top',
			textAlign: 'left',
		},
		textInputContainer: {
			flexDirection: 'row',
			paddingTop: '4@s',
			paddingHorizontal: '8@s',
			marginBottom: '4@s',
			marginHorizontal: '4@s',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			overflow: 'hidden',
		},
		textInput: {
			flex: 1,
			fontFamily: 'PixyFont',
			fontSize: '20@s',
			marginTop: '4@s',
			textAlignVertical: 'top',
			textAlign: 'left',
		},
	});
	const styleChanger = {
		true: {
			textInput: styles.textInputEditing,
			textInputContainer: styles.textInputEditingContainer,
		},
		false: {
			textInput: styles.textInput,
			textInputContainer: styles.textInputContainer,
		},
	};
	return (
		<Animated.View
			style={[
				styleChanger[isEditing].textInputContainer,
				{
					// backgroundColor: 'red',
					color: colorPalette.gamma,
				},
			]}
			layout={LinearTransition}
		>
			<TextInput
				style={[
					styleChanger[isEditing].textInput,
					{
						color: colorPalette.gamma,
					},
				]}
				secureTextEntry={type === 'secure' ? true : false}
				multiline={type === 'default' ? true : false}
				value={textInputValue}
				onChangeText={(text) => {
					setTextInputValue(text);
					handleText(text);
				}}
				editable={isEditing}
			/>
			{isEditing ? (
				<View>
					<ActionButton
						icon={ACTION_BUTTON_CANCEL}
						color={colorPalette.gamma}
						font={'Icons'}
						onPress={() => {
							setTextInputValue(initialTextValue);
						}}
						animation={'grow'}
					/>
					<ActionButton
						icon={ACTION_BUTTON_COMPLETE}
						color={colorPalette.gamma}
						font={'Icons'}
						onPress={() => {
							editingCounter.decrease();
							setIsEditing(false);
						}}
						animation={'grow'}
					/>
				</View>
			) : (
				<Animated.View style>
					<ActionButton
						icon={ACTION_BUTTON_EDIT}
						color={colorPalette.gamma}
						font={'Icons'}
						onPress={() => {
							if (editingCounter.current < 2) {
								editingCounter.increase();
								setIsEditing(true);
							} else {
								Vibration.vibrate([100, 250]);
								//animation
							}
						}}
						animation={editingCounter.current < 2 ? 'none' : 'shake'}
					/>
				</Animated.View>
			)}
		</Animated.View>
	);
};
