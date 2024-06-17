import { growAnimation, decreaseAnimation } from './List';
export function Animations() {
	const animationsList = {
		grow: growAnimation,
		decrease: decreaseAnimation,
	};

	return animationsList;
}
