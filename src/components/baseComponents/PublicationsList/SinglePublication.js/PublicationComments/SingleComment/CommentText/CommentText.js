import { TextInput, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ActionButton } from '../../../../../ActionButton';
import {
	ACTION_BUTTON_COMPLETE,
	ACTION_BUTTON_CANCEL,
} from '../../../../../../../constants/icons';
import editComment from './editComment/editComment';
import { useToast } from 'react-native-toast-notifications';
import toastConfig from '../../../../../../../utils/toastConfig/toastConfig';
export const CommentText = (props) => {
	const [textValue, setTextValue] = useState(props.text);
	const startValue = props.text;

	const cancelEdit = () => {
		setTextValue(startValue);
	};

	const styleChanger = {
		true: {
			commentTextContainer: styles.commentTextEditingContainer,
			commentText: styles.commentEditingText,
		},
		false: {
			commentTextContainer: styles.commentTextContainer,
			commentText: styles.commentText,
		},
	};

	const toast = useToast();

	return (
		<Animated.View
			layout={LinearTransition}
			style={[
				styleChanger[props.editing].commentTextContainer,
				{
					borderColor: props.colorPalette.alpha,
				},
			]}
		>
			<TextInput
				style={[
					styleChanger[props.editing].commentText,
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
										editComment(
											textValue.trim(),
											props.publicationId,
											props.id,
											toast,
											props.colorPalette,
										);
									props.edit();
								} catch (error) {
									const alert = toastConfig(props.colorPalette, true);
									toast.show(alert.text.true.network, alert.settings);
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
	commentTextEditingContainer: {
		flex: 1,
		flexDirection: 'row',
		borderWidth: '2@s',
		borderRadius: 10,
		marginTop: '5@s',
		paddingVertical: '6@s',
		paddingRight: '4@s',
		paddingLeft: '2@s',
		justifyContent: 'center',
		alignItems: 'flex-start',
		overflow: 'hidden',
	},
	commentEditingText: {
		flex: 1,
		fontFamily: 'sans-serif-medium',
		fontSize: '15@s',
		textAlignVertical: 'top',
		textAlign: 'left',
	},
	commentTextContainer: {
		paddingTop: '6@s',
		paddingLeft: '4@s',
		marginTop: '5@s',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		overflow: 'hidden',
	},
	commentText: {
		fontFamily: 'sans-serif-medium',
		fontSize: '15@s',
	},
	cancelButton: {
		marginTop: '6@s',
	},
});
