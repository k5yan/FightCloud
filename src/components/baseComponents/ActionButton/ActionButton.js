import * as HTML_Entity from 'he';
import { TouchableOpacity, Animated } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Animations } from '../Animations';

export const ActionButton = (props) => {
	const startAnimationValue = new Animated.Value(1);
	const Animation = Animations();

	const defaultType = props.type === 'TabBarButton' ? false : true;
	const focused = defaultType ? false : props.accessibilityState.selected;
	const icon = HTML_Entity.decode(props.icon);

	const iconColor = defaultType
		? props.color
		: focused
		? props.color.focused
		: props.color.unfocused;

	return (
		<TouchableOpacity
			style={
				defaultType ? styles.defaultButtonContainer : styles.navBarButtonContainer
			}
			onPressIn={props.onPress}
			onPress={() => Animation.grow(startAnimationValue, 1.2)}
			onPressOut={() =>
				setTimeout(() => Animation.decrease(startAnimationValue, 1), 260)
			}
			disabled={focused}
			activeOpacity={1}
		>
			<Animated.Text
				style={[
					defaultType ? styles.defaultIcon : styles.navBarIcon,
					{
						color: iconColor,
						transform: [{ scale: startAnimationValue }],
					},
				]}
			>
				{icon}
			</Animated.Text>
		</TouchableOpacity>
	);
};

let styles = ScaledSheet.create({
	navBarButtonContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	navBarIcon: {
		fontSize: '25@s',
		fontFamily: 'Icons',
		marginVertical: '8@vs',
	},
	navBarIconT: {
		fontSize: '25@s',
		fontFamily: 'Test',
		marginVertical: '8@vs',
	},
	defaultButtonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	defaultIcon: {
		fontSize: '25@s',
		fontFamily: 'Icons',
	},
});
