import { Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const TabLabel = (props) => {
	const iconColor = props.focused ? props.colorPalette.gamma : props.colorPalette.delta;

	return (
		<Text
			style={[
				styles.tabLabel,
				{
					color: iconColor,
				},
			]}
		>
			{props.label}
		</Text>
	);
};

const styles = ScaledSheet.create({
	tabLabel: {
		fontSize: '20@s',
		fontFamily: 'PixyFont',
	},
});
