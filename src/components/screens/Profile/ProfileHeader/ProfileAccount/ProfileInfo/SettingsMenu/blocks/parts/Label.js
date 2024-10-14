import { ScaledSheet } from 'react-native-size-matters';
import { View, Text } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
export const Label = ({ text, type = 'default' }) => {
	const styles = ScaledSheet.create({
		labelContainer: {
			width: '100%',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			paddingLeft: '12@s',
			paddingTop: '2@s',
			borderTopWidth: '2@s',
			borderColor: '#2F2F2F',
		},
		label: {
			fontSize: `18@s`,
			fontFamily: 'PixyFont',
			color: '#F08080',
			textAlignVertical: 'center',
			textAlign: 'left',
			lineHeight: '24@s',
		},
		mainLabelContainer: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		mainLabel: {
			fontSize: `20@s`,
			color: 'white',
			fontFamily: 'PixyFont',
			textAlignVertical: 'center',
			textAlign: 'left',
			lineHeight: '24@s',
		},
	});
	const styleChanger = {
		default: {
			labelContainer: styles.labelContainer,
			label: styles.label,
		},
		main: {
			labelContainer: styles.mainLabelContainer,
			label: styles.mainLabel,
		},
	};
	return (
		<Animated.View
			style={styleChanger[type].labelContainer}
			layout={LinearTransition}
		>
			<Text style={styleChanger[type].label}>{text}</Text>
		</Animated.View>
	);
};
