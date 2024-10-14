import { defaultAnimation } from './defaultAnimation';
import { defaultAnimationSpring } from './defaultAnimationSpring';
import { withSequence, withSpring, Easing, withTiming } from 'react-native-reanimated';
import { useAnimatedStyle, useDerivedValue, interpolate } from 'react-native-reanimated';

export const shakeAnimation = (startRotationAnimationValue, startColorAnimationValue) => {
	return {
		style: useAnimatedStyle(() => {
			return {
				color: startColorAnimationValue.value,
				transform: [
					{
						translateX: startRotationAnimationValue.value,
					},
				],
			};
		}, []),
		onPress: () => {
			startColorAnimationValue.value = withTiming('red', {
				duration: 0,
				easing: Easing.linear,
			});
			setTimeout(() => {
				startColorAnimationValue.value = withTiming('white', {
					duration: 200,
					easing: Easing.linear,
				});
			}, 300);

			startRotationAnimationValue.value = withSequence(
				withTiming(2.5, {
					duration: 75,
					easing: Easing.linear,
				}),
				withTiming(-2.5, {
					duration: 75,
					easing: Easing.linear,
				}),
				withTiming(2, {
					duration: 75,
					easing: Easing.linear,
				}),
				withTiming(1, {
					duration: 75,
					easing: Easing.linear,
				}),
				withSpring(0, {
					duration: 100,
					stiffness: 70,
					dampingRatio: 0.2,
				}),
			);
		},
		onPressOut: () => {},
	};
};
