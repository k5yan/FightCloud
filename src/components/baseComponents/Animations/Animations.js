import { useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import {
	growAnimation,
	rotationAnimation,
	changeAnimation,
	translateAnimation,
} from './List';

export const Animations = () => {
	const startGrowAnimationValue = useSharedValue(1);
	const startRotationAnimationValue = useSharedValue(0);
	const startTranslateXAnimationValue = useSharedValue(0);
	const startTranslateYAnimationValue = useSharedValue(0);

	const [animationState, setAnimationState] = useState(false);
	const handleSetAnimationState = () => {
		setAnimationState(!animationState);
	};

	const animationsConfig = {
		grow: growAnimation(startGrowAnimationValue),
		rotation: rotationAnimation(
			startRotationAnimationValue,
			handleSetAnimationState,
			animationState,
		),
		change: changeAnimation(startGrowAnimationValue),
		translate: translateAnimation(
			startTranslateXAnimationValue,
			startTranslateYAnimationValue,
			startGrowAnimationValue,
		),
	};

	return animationsConfig;
};
