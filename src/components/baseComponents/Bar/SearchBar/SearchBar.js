import { useState } from 'react';
import { TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectDiscoverPublicationDraft,
	selectUserPublicationDraft,
} from '../../../../redux/selectors/data/publicationSelectors/publicationSelectors';
import Animated, { LinearTransition } from 'react-native-reanimated';
import {
	SAVE_USER_TEXT_DRAFT,
	SAVE_DISCOVER_TEXT_DRAFT,
} from '../../../../redux/actions/publicationActions';

export const SearchBar = ({ colorPalette, shapes, placeholder, changeValue, type }) => {
	// const styles = ScaledSheet.create(shapes);
	const draft = {
		userPublication: useSelector(selectUserPublicationDraft).text,
		discoverPublication: useSelector(selectDiscoverPublicationDraft).text,
		comment: '',
	};

	const [inputValue, setInputValue] = useState(draft[type]);
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

	const setDraft = {
		userPublication: () => dispatch(SAVE_USER_TEXT_DRAFT(inputValue)),
		discoverPublication: () => dispatch(SAVE_DISCOVER_TEXT_DRAFT(inputValue)),
		comment: null,
	};

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
					if (setDraft[type]) {
						setDraft[type]();
					}
				}}
			/>
		</Animated.View>
	);
};
