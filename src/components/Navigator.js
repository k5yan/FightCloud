import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home/Home';
import { Profile } from './screens/Profile';
import { ScaledSheet } from 'react-native-size-matters';
import { Guides } from './screens/Guides';
import { Icon } from './screens/Icon/Icon';

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
						<Icon focused={focused} iconId={'&#xe900'} />
					),
				}}
			/>
			<Tab.Screen
				name="Guides"
				component={Guides}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<Icon focused={focused} iconId={'&#xe906;'} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<Icon focused={focused} iconId={'&#xe904;'} />
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
		// flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#e7e7ff',
	},
	navBarIcon: {
		fontSize: '25@s',
		fontFamily: 'Icons',
		marginVertical: '8@vs',
	},
});
