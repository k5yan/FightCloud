import { ScaledSheet } from 'react-native-size-matters';

export default function (colorPalette, error) {
	styles = ScaledSheet.create({
		toast: {
			backgroundColor: colorPalette.beta,
			borderWidth: '2@s',
			borderRadius: 4,
			borderColor: error ? '#E32636' : colorPalette.delta,
		},
		toastText: {
			fontFamily: 'PixyFont',
			fontSize: '16@s',
			color: 'white',
		},
	});
	return {
		settings: {
			duration: 3000,
			placement: 'top',
			style: styles.toast,
			textStyle: styles.toastText,
		},
		text: {
			false: (type, action) =>
				//no error
				`${type} ${action.slice(0, -1)}ed succesfully`,
			true: (type, action) =>
				//have error
				`${type} ${action.slice(0, -1)}ing error`,
			network: () => 'network error, check your internet connection',
		},
	};
}
