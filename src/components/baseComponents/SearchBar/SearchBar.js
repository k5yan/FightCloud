import { useRef, useState } from 'react';
import { Animations } from '../Animations';
import { View, TextInput, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { selectPublicationDraft } from '../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import Animated, { LinearTransition } from 'react-native-reanimated';

export const SearchBar = ({ colorPalette, shapes, placeholder, changeValue }) => {
	// const styles = ScaledSheet.create(shapes);
	const textValue = useSelector(selectPublicationDraft).text;
	const [inputValue, setInputValue] = useState(textValue);
	const dispatch = useDispatch();

	const styles = ScaledSheet.create({
		searchBarContainer: {
			flex: 1,
			// minWidth: '1@s',
			// backgroundColor: 'red',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			paddingHorizontal: '12@s',
			marginTop: '4@s',
		},
		searchBar: {
			width: '100%',
			fontSize: '20@s',
			// fontFamily: 'sans-serif-medium',
			fontFamily: 'PixyFont',
			textAlignVertical: 'center',
			textAlign: 'left',
			lineHeight: '24@s',
		},
	});

	return (
		<Animated.View
			layout={LinearTransition}
			style={[{ backgroundColor: colorPalette.beta }, styles.searchBarContainer]}
		>
			<TextInput
				value={inputValue}
				style={[
					styles.searchBar,
					{
						color: colorPalette.gamma,
					},
				]}
				placeholder={placeholder}
				placeholderTextColor={colorPalette.delta}
				multiline={true}
				onChange={(event) => {
					changeValue(event.nativeEvent.text); //для создания публикаций
					setInputValue(event.nativeEvent.text);
				}}
				onBlur={() => {
					dispatch({ type: 'SAVE_TEXT_DRAFT', payload: inputValue });
				}}
			/>
		</Animated.View>
	);
};
