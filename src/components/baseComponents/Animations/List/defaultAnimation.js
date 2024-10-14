import { withTiming, Easing } from 'react-native-reanimated';

export const defaultAnimation = (startAnimationValue, endAnimationValue, duration) => {
	startAnimationValue.value = withTiming(endAnimationValue, {
		duration,
		easing: Easing.linear,
	});
};
