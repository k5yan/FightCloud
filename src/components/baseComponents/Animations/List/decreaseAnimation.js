import { Animated } from 'react-native';

export const decreaseAnimation = (
	startAnimationValue,
	endAnimationValue,
	duration = 150,
) => {
	Animated.timing(startAnimationValue, {
		toValue: endAnimationValue,
		duration: duration,
		useNativeDriver: true,
	}).start();
};
