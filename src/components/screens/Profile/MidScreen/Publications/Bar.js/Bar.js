import { View } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../../../../../baseComponents/ActionButton';
import { SearchBar } from '../../../../../baseComponents/SearchBar';
import {
	selectSearchBarStyles,
	selectPublicationDraft,
} from '../../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { request } from '../../../../../../utils/serverCalls/request';
import { getItem } from '../../../../../../utils/secureStore';
import {
	ACTION_BUTTON_EDIT,
	ACTION_BUTTON_SEARCH,
	ACTION_BUTTON_SEND,
} from '../../../../../../constants/icons';
import { updatePublications } from '../../../../../../utils/updatePublications';
import Animated, { LinearTransition } from 'react-native-reanimated';

export const Bar = ({ placeholder, colorPalette }) => {
	const textDraft = useSelector(selectPublicationDraft).text;
	const shapes = useSelector(selectSearchBarStyles);
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState(textDraft);

	const handleInputChange = (text) => setInputValue(text);

	const [buttonMode, setButtonMode] = useState(true);

	const SavePublication = async () => {
		const token = await getItem('token');
		if (token) {
			await request('/publications', 'POST', {
				publication: {
					text: inputValue,
				},
				token: token,
			});
			dispatch({ type: 'CLEAR_DRAFT' });
			await updatePublications(dispatch);
		}
	};

	const styles = ScaledSheet.create({
		barContainer: {
			// height: '20@s',
			backgroundColor: colorPalette.beta,
			justifyContent: 'space-around',
			alignItems: 'flex-start',
			flexDirection: 'row',
			marginTop: '8@s',
			marginBottom: '4@s',
			marginHorizontal: '4@s',
			paddingVertical: '4@s',
			borderRadius: 10,
			borderWidth: '2@s',
			borderColor: colorPalette.beta,
		},
		buttonContainer: {
			marginTop: '2@s',
			marginHorizontal: '8@s',
		},
	});

	return (
		<Animated.View style={styles.barContainer} layout={LinearTransition}>
			<Animated.View style={styles.buttonContainer}>
				<ActionButton
					icon={buttonMode ? ACTION_BUTTON_EDIT : ACTION_BUTTON_SEARCH}
					color={colorPalette.gamma}
					font={'Icons'}
					onPress={async () => {
						try {
							setTimeout(() => setButtonMode(!buttonMode), 200);
						} catch (error) {
							console.log('ACTION_BUTTON_EDIT/SEARCH: ', error);
						}
					}}
					animation={'change'}
				/>
			</Animated.View>

			{/* <Animated.View style={{ flex: 1 }} layout={LinearTransition}> */}
			<SearchBar
				colorPalette={colorPalette}
				shapes={shapes}
				placeholder={placeholder}
				changeValue={handleInputChange}
			/>
			{/* </Animated.View> */}

			<View style={styles.buttonContainer}>
				<ActionButton
					icon={ACTION_BUTTON_SEND}
					color={colorPalette.gamma}
					font={'Icons'}
					onPress={async () => {
						try {
							SavePublication();
						} catch (error) {
							console.log('ACTION_BUTTON_SEND: ', error);
						}
					}}
					animation={'translate'}
				/>
			</View>
		</Animated.View>
	);
};
