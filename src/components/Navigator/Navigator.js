import { NavBar } from './NavBar/NavBar';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Profile } from '../screens';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="Navigation"
		>
			{/* <Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} /> */}
			<Stack.Screen name="Navigation" component={NavBar} />
		</Stack.Navigator>
	);
};
