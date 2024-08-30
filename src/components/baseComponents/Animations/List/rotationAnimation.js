import { defaultAnimation } from './defaultAnimation';
import { useAnimatedStyle, useDerivedValue, interpolate } from 'react-native-reanimated';

export const rotationAnimation = (
	startRotationAnimationValue,
	handleSetAnimationState,
	animationState,
) => {
	const rotationValue = useDerivedValue(() =>
		interpolate(startRotationAnimationValue.value, [0, 1], [0, 90]),
	);

	return {
		style: useAnimatedStyle(() => {
			return {
				transform: [
					{
						rotateZ: `${rotationValue.value}deg`,
					},
				],
			};
		}, []),
		onPress: () =>
			defaultAnimation(startRotationAnimationValue, animationState ? 0 : 1, 300),
		onPressOut: () => handleSetAnimationState(),
	};
};
