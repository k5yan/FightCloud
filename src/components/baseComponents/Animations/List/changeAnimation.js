import { defaultAnimation } from './defaultAnimation';
import { useAnimatedStyle } from 'react-native-reanimated';

export const changeAnimation = (startGrowAnimationValueR) => {
	return {
		style: useAnimatedStyle(() => {
			return {
				transform: [{ scale: startGrowAnimationValueR.value }],
			};
		}, []),
		onPress: () => defaultAnimation(startGrowAnimationValueR, 0, 200),
		onPressOut: () =>
			setTimeout(() => {
				defaultAnimation(startGrowAnimationValueR, 1, 200);
			}, 200),
	};
};
