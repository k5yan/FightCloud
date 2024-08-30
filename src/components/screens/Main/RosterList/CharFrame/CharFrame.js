import { Text, View, Image, Animated } from 'react-native';
import { charFrameImagePath } from '../../../../../constants/imagePath/charFrameImagePath';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import {
	selectCharFrameStyles,
	selectColorPalette,
} from '../../../../../redux/selectors/styles/MainSelectors/MainSelectors';

export const CharFrame = (props) => {
	const nameTitle = props.nameTitle;
	const charFrame = useSelector(selectCharFrameStyles);
	const colorPalette = useSelector(selectColorPalette);
	const styles = ScaledSheet.create(charFrame);
	return (
		<RectButton rippleColor={'transparent'}>
			<View
				style={[
					{ backgroundColor: colorPalette.beta },
					styles.charFrameContainer,
				]}
			>
				<Image
					style={styles.charFrameImage}
					source={charFrameImagePath[nameTitle]}
				></Image>
				<Text style={styles.charFrameTitle}>{nameTitle}</Text>
			</View>
		</RectButton>
	);
};
