import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { ScaledSheet } from 'react-native-size-matters';
import { Guides } from '../screens/Guides';
import { Icon } from './Icon';
import {
	NAVBAR_BUTTON_ROSTER,
	NAVBAR_BUTTON_DISCOVER,
	NAVBAR_BUTTON_PROFILE,
} from '../../constants/icons';

const Stack = createStackNavigator();
const screenOptionStyle = {
	headerShown: false,
};
const Tab = createBottomTabNavigator();
export const NavBar = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.navBarContainer,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<Icon focused={focused} iconId={NAVBAR_BUTTON_ROSTER} />
					),
				}}
			/>
			<Tab.Screen
				name="Guides"
				component={Guides}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<Icon focused={focused} iconId={NAVBAR_BUTTON_DISCOVER} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<Icon focused={focused} iconId={NAVBAR_BUTTON_PROFILE} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export const HomeStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Navigation">
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="Navigation" component={NavBar} />
		</Stack.Navigator>
	);
};

const styles = ScaledSheet.create({
	navBarContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#e7e7ff',
	},
	navBarIcon: {
		fontSize: '25@s',
		fontFamily: 'Icons',
		marginVertical: '8@s',
	},
});
