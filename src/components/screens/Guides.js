import { View, Image, Picker, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const Guides = () => {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'space-around',
			}}
		>
			<View style={styles.container}>
				<View style={styles.parent}></View>
				<View style={styles.child} />
			</View>
			<View style={styles.container}>
				<View style={styles.parent}>{/* <View style={styles.child} /> */}</View>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	container: {
		width: 100,
		height: 100,
		position: 'relative',
		marginTop: 22,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e7e7ff',
		borderWidth: 2,
		borderColor: 'red',
	},
	parent: {
		position: 'relative',
		backgroundColor: '#CD5C5C',
		width: 100,
		height: 100,
		zIndex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	child: {
		position: 'absolute',
		backgroundColor: 'cyan',
		width: 150,
		height: 150,
		zIndex: 1,
		left: -40,
		top: -10,
	},
});
