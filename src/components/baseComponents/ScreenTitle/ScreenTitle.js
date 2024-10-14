import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Animated, {
	JumpingTransition,
	LinearTransition,
	ReduceMotion,
} from 'react-native-reanimated';
export const ScreenTitle = (props) => {
	return (
		<View style={styles.titleContainer}>
			<Animated.Text layout={LinearTransition.duration(400)} style={styles.title}>
				{props.title}
			</Animated.Text>
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
		marginTop: '4@s',
	},
});
