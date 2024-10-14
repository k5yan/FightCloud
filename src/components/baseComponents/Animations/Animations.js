import { useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import {
	growAnimation,
	rotationAnimation,
	changeAnimation,
	translateAnimation,
	releaseAnimation,
	increaseAnimation,
	shakeAnimation,
} from './List';

export const Animations = () => {
	const startGrowAnimationValue = useSharedValue(1);

	const startRotationAnimationValue = useSharedValue(0);
	const startColorAnimationValue = useSharedValue('white');

	const startTranslateXAnimationValue = useSharedValue(0);
	const startTranslateYAnimationValue = useSharedValue(0);

	const startReleaseAnimationValueW = useSharedValue(0);
	const startReleaseAnimationValueH = useSharedValue(0);

	const [animationState, setAnimationState] = useState(false);
	const handleAnimationState = () => {
		setAnimationState(!animationState);
	};

	const animationsConfig = {
		grow: growAnimation(startGrowAnimationValue),
		rotation: rotationAnimation(
			startRotationAnimationValue,
			handleAnimationState,
			animationState,
		),
		shake: shakeAnimation(startRotationAnimationValue, startColorAnimationValue),
		change: changeAnimation(startGrowAnimationValue),
		translate: translateAnimation(
			startTranslateXAnimationValue,
			startTranslateYAnimationValue,
			startGrowAnimationValue,
		),
		release: releaseAnimation(
			startReleaseAnimationValueW,
			startReleaseAnimationValueH,
		),
		increase: increaseAnimation(startReleaseAnimationValueH),
		none: {
			style: '',
			onPress: () => {},
			onPressOut: () => {},
		},
	};

	return animationsConfig;
};
