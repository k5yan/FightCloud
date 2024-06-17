import { Animated } from 'react-native';

export const growAnimation = (startAnimationValue, endAnimationValue, duration = 150) => {
	return Animated.timing(startAnimationValue, {
		toValue: endAnimationValue,
		duration: duration,
		useNativeDriver: true,
	}).start();
};
