import { View, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import * as HTML_Entity from 'he';

export const ActionButton = (props) => {
	const icon = HTML_Entity.decode(props.icon);

	return (
		<View style={styles.topMenuIconContainer}>
			<TouchableOpacity>
				<Text style={[styles.topMenuIcon, { color: props.iconColor }]}>
					{icon}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = ScaledSheet.create({
	topMenuIconContainer: {
		width: '10%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	topMenuIcon: {
		fontSize: '25@s',
		fontFamily: 'Icons',
	},
});
