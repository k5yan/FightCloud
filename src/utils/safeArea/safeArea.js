import { StyleSheet, Platform, StatusBar } from 'react-native';

export default function (colorPalette) {
	return StyleSheet.create({
		style: {
			backgroundColor: colorPalette,
			paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		},
	});
}
