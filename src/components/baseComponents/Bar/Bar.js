import { View } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../ActionButton';
import { SearchBar } from './SearchBar';
import {
	selectSearchBarStyles,
	selectPublicationDraft,
} from '../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import {
	ACTION_BUTTON_EDIT,
	ACTION_BUTTON_SEARCH,
	ACTION_BUTTON_SEND,
	ACTION_BUTTON_IMAGE,
} from '../../../constants/icons';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { savePublication, saveComment, pickFile } from './barUtils';
import { PinImages } from './PinImages/PinImages';
import { useToast } from 'react-native-toast-notifications';
import toastConfig from '../../../utils/toastConfig/toastConfig';
export const Bar = ({ placeholder, colorPalette, type, publicationId }) => {
	const styles = ScaledSheet.create({
		barContainer: {
			backgroundColor: colorPalette.beta,
			justifyContent: 'space-around',
			alignItems: 'flex-end',
			paddingVertical: '4@s',
			borderRadius: 10,
			borderWidth: '2@s',
			borderColor: colorPalette.beta,
		},
		barHeaderContainer: {
			justifyContent: 'space-around',
			alignItems: 'flex-start',
			flexDirection: 'row',
		},
		buttonContainer: {
			marginTop: '2@s',
			marginHorizontal: '8@s',
		},
	});
	const [pinImages, setPinImages] = useState([]);
	const handleUnpin = (data) =>
		setPinImages(pinImages.filter((image) => image.uri !== data));

	const textDraft = useSelector(selectPublicationDraft).text;
	const [inputValue, setInputValue] = useState(textDraft);
	const handleInputChange = (text) => setInputValue(text);
	const toast = useToast();

	const [buttonMode, setButtonMode] = useState(true);
	const shapes = useSelector(selectSearchBarStyles);
	const dispatch = useDispatch();

	const save = {
		userPublication: async () =>
			await savePublication(
				dispatch,
				inputValue,
				pinImages,
				type,
				toast,
				colorPalette,
			),
		discoverPublication: async () =>
			await savePublication(
				dispatch,
				inputValue,
				pinImages,
				type,
				toast,
				colorPalette,
			),
		comment: async () =>
			await saveComment(dispatch, publicationId, inputValue, toast, colorPalette),
	};

	return (
		<Animated.View style={styles.barContainer} layout={LinearTransition}>
			<Animated.View style={styles.barHeaderContainer} layout={LinearTransition}>
				<View style={styles.buttonContainer} layout={LinearTransition}>
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
				</View>

				<SearchBar
					colorPalette={colorPalette}
					shapes={shapes}
					placeholder={placeholder}
					changeValue={handleInputChange}
					type={type}
				/>
				{type === 'userPublication' && (
					<View style={styles.buttonContainer} layout={LinearTransition}>
						<ActionButton
							icon={ACTION_BUTTON_IMAGE}
							color={colorPalette.gamma}
							font={'Icons'}
							onPress={async () => {
								try {
									const pickedFile = await pickFile();
									pickedFile &&
										setPinImages([...pinImages, pickedFile]);
								} catch (error) {
									console.log('ACTION_BUTTON_PICKER: ', error);
								}
							}}
							animation={'grow'}
						/>
					</View>
				)}
				<View style={styles.buttonContainer} layout={LinearTransition}>
					<ActionButton
						icon={ACTION_BUTTON_SEND}
						color={colorPalette.gamma}
						font={'Icons'}
						onPress={async () => {
							try {
								await save[type]();
							} catch (error) {
								toast.show(
									'network error',
									toastConfig(colorPalette, true),
								);
								console.log('ACTION_BUTTON_SEND: ', error);
							}
						}}
						animation={'translate'}
					/>
				</View>
			</Animated.View>
			{pinImages.length !== 0 && (
				<PinImages
					pinImages={pinImages.map((image) => image.uri)}
					unpin={handleUnpin}
				/>
			)}
		</Animated.View>
	);
};
