import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const AppTitle = (props) => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	);
};

const styles = ScaledSheet.create({
	title: {
		fontFamily: 'PixyFont',
		fontSize: '25@s',
		color: '#fff',
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '30@s',
	},
});
