import * as HTML_Entity from 'he';
import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';
import { Animations } from '../Animations';

export const ActionButton = (props) => {
	const Animation = Animations();

	const buttonType = props.type || 'default';
	const focused =
		buttonType === 'tabBarButton' ? props.accessibilityState.selected : false;
	const label = HTML_Entity.decode(props.icon);

	const touchableOpacityStyle = {
		default: styles.defaultButtonContainer,
		tabBarButton: styles.navBarButtonContainer,
		submitButton: styles.submitButtonContainer,
	};

	const textStyle = {
		default: styles.defaultIcon,
		tabBarButton: styles.navBarIcon,
		submitButton: styles.defaultIcon,
	};

	const labelColor =
		buttonType === 'tabBarButton'
			? focused
				? props.color.focused
				: props.color.unfocused
			: props.color;

	return (
		<TouchableOpacity
			style={touchableOpacityStyle[buttonType]}
			onPressIn={props.onPress}
			onPress={() => {
				Animation[props.animation].onPress();
			}}
			onPressOut={() => {
				Animation[props.animation].onPressOut();
			}}
			disabled={focused}
			activeOpacity={1}
		>
			<Animated.Text
				style={[
					textStyle[buttonType],
					{
						color: labelColor,
						fontFamily: props.font,
					},
					Animation[props.animation].style,
				]}
			>
				{label}
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
	defaultButtonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	defaultIcon: {
		fontSize: '25@s',
		fontFamily: 'Icons',
	},
	submitButtonContainer: {
		backgroundColor: '#2F2F2F',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#2F2F2F',
		borderRadius: 6,
		paddingVertical: '3@s',
		marginVertical: '2@s',
		marginHorizontal: '60@s',
	},
	navBarIconT: {
		fontSize: '25@s',
		fontFamily: 'Test',
		marginVertical: '8@vs',
	},
	defaultIconT: {
		fontSize: '25@s',
		fontFamily: 'Test',
	},
});
