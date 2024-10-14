import { defaultAnimation } from './defaultAnimation';
import { useAnimatedStyle } from 'react-native-reanimated';

export const releaseAnimation = (
	startReleaseAnimationValueW,
	startReleaseAnimationValueH,
) => {
	return {
		style: (toWidth, toHeight) =>
			useAnimatedStyle(() => {
				return {
					minHeight: startReleaseAnimationValueH.value,
					maxHeight:
						startReleaseAnimationValueH.value < toHeight
							? startReleaseAnimationValueH.value
							: undefined,
					minWidth: startReleaseAnimationValueW.value,
					maxWidth:
						startReleaseAnimationValueW.value < toWidth
							? startReleaseAnimationValueW.value
							: undefined,
				};
			}),
		onPress: (toWidth, toHeight) => {
			defaultAnimation(
				startReleaseAnimationValueH,
				toHeight,
				toHeight === 0 ? 200 : 300,
			);
			defaultAnimation(
				startReleaseAnimationValueW,
				toWidth,
				toWidth === 0 ? 200 : 300,
			);
		},
		onPressOut: () => {},
	};
};
