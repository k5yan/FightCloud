import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useEffect } from 'react';
export const Cap = ({ textColor, capText }) => {
	useEffect(() => {
		console.log('рендер');
	}, []);
	return (
		<View style={styles.capTextContainer}>
			<Text style={[styles.capText, { color: textColor }]}>{capText}</Text>
		</View>
	);
};
const styles = ScaledSheet.create({
	capTextContainer: {
		marginTop: '20@s',
		justifyContent: 'center',
		alignItems: 'center',
	},
	capText: {
		fontFamily: 'PixyFont',
		fontSize: '20@s',
	},
});
