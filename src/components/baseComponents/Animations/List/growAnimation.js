import { defaultAnimation } from './defaultAnimation';
import { useAnimatedStyle } from 'react-native-reanimated';

export const growAnimation = (startGrowAnimationValue) => {
	return {
		style: useAnimatedStyle(() => {
			return {
				transform: [{ scale: startGrowAnimationValue.value }],
			};
		}, []),
		onPress: () => defaultAnimation(startGrowAnimationValue, 1.2, 250),
		onPressOut: () =>
			setTimeout(() => {
				defaultAnimation(startGrowAnimationValue, 1, 250);
			}, 250),
	};
};
