import * as HTML_Entity from 'he';
import { Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const Icon = (props) => {
	const icon = HTML_Entity.decode(props.iconId);
	const iconColor = props.focused ? '#F08080' : 'rgb(15, 187, 232)';

	return (
		<Text
			style={[
				styles.navBarIcon,
				{
					color: iconColor,
				},
			]}
		>
			{icon}
		</Text>
	);
};

const styles = ScaledSheet.create({
	navBarIcon: {
		fontSize: '25@s',
		fontFamily: 'Icons',
		marginVertical: '8@vs',
	},
});
