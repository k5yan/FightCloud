import { Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const TabLabel = (props) => {
	const iconColor = props.focused ? props.color.focused : props.color.unfocused;

	return (
		<Text
			style={[
				styles.navBarIcon,
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
	navBarIcon: {
		fontSize: '20@s',
		fontFamily: 'PixyFont',
	},
});
