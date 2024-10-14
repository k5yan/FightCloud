import { defaultAnimation } from './defaultAnimation';
import { useAnimatedStyle } from 'react-native-reanimated';

export const increaseAnimation = (startReleaseAnimationValueH) => {
	return {
		style: (startValue) =>
			useAnimatedStyle(() => {
				console.log('start', startValue);
				return {
					height:
						startReleaseAnimationValueH.value <= startValue
							? 'auto'
							: startReleaseAnimationValueH.value,
				};
			}),
		onPress: (toValue) => {
			console.log('to: ', toValue);
			defaultAnimation(startReleaseAnimationValueH, toValue, 300);
		},
		onPressOut: () => {},
	};
};
