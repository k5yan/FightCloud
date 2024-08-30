import { TextInput, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ActionButton } from '../../../ActionButton';
import { ACTION_BUTTON_SEND } from '../../../../../constants/icons';
import { request } from '../../../../../utils/serverCalls/request';
import { updatePublications } from '../../../../../utils/updatePublications';
import { useDispatch } from 'react-redux';
import { getItem } from '../../../../../utils/secureStore';

export const PublicationText = (props) => {
	const dispatch = useDispatch();
	const [textValue, setTextValue] = useState(props.text);

	const SavePublication = async () => {
		const token = await getItem('token');
		console.log(token);
		if (token) {
			await request(`/publications/${props.id}`, 'PATCH', {
				publication: { text: textValue },
				token: token,
			});
			await updatePublications(dispatch);
		}
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
				<ActionButton
					icon={ACTION_BUTTON_SEND}
					color={props.colorPalette.gamma}
					font={'Icons'}
					onPress={async () => {
						try {
							SavePublication();
						} catch (error) {
							console.log('ACTION_BUTTON_SUBMIT_EDIT: ', error);
						}
					}}
					animation={'grow'}
				/>
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
		marginVertical: '6@s',
		paddingVertical: '4@s',
		paddingRight: '4@s',
		paddingLeft: '6@s',
		justifyContent: 'center',
		alignItems: 'flex-start',
		// alignItems: 'bottom',
	},
	publicationEditingText: {
		flex: 1,
		fontFamily: 'sans-serif-medium',
		fontSize: '16@s',
		textAlignVertical: 'top',
		textAlign: 'left',
	},
	publicationTextContainer: {
		paddingVertical: '6@s',
		paddingHorizontal: '4@s',
		marginVertical: '4@s',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	publicationText: {
		// color: 'white',

		fontFamily: 'sans-serif-medium',
		fontSize: '16@s',
	},
});
