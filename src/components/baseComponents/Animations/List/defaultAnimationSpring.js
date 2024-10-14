import { withSpring } from 'react-native-reanimated';

export const defaultAnimationSpring = (
	startAnimationValue,
	endAnimationValue,
	duration,
) => {
	startAnimationValue.value = withSpring(endAnimationValue, {
		duration,
		dampingRatio: 0.6,
		stiffness: 100,
	});
};
