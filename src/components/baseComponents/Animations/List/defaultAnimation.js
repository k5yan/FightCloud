import { useRef } from 'react';
import { Animated } from 'react-native';
import { withTiming, Easing, useSharedValue } from 'react-native-reanimated';

export const defaultAnimation = (startAnimationValue, endAnimationValue, duration) => {
	startAnimationValue.value = withTiming(endAnimationValue, {
		duration,
		easing: Easing.linear,
	});
};
