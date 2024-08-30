import { defaultAnimation } from './defaultAnimation';
import { useAnimatedStyle } from 'react-native-reanimated';

export const translateAnimation = (
	startTranslateXAnimationValue,
	startTranslateYAnimationValue,
	startGrowAnimationValue,
) => {
	return {
		style: useAnimatedStyle(() => {
			return {
				transform: [
					{ translateX: startTranslateXAnimationValue.value },
					{ translateY: startTranslateYAnimationValue.value },
					{ scale: startGrowAnimationValue.value },
				],
			};
		}, []),
		onPress: () => {
			defaultAnimation(startTranslateXAnimationValue, 8, 400);
			defaultAnimation(startTranslateYAnimationValue, -8, 400);
			defaultAnimation(startGrowAnimationValue, 0, 500);
		},
		onPressOut: () => {
			setTimeout(() => {
				defaultAnimation(startTranslateXAnimationValue, 0, 0);
				defaultAnimation(startTranslateYAnimationValue, 0, 0);
				defaultAnimation(startGrowAnimationValue, 1, 50);
			}, 500);
		},
	};
};
