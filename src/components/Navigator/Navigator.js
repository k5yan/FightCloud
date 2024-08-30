import { SinglePublicationOpen } from '../baseComponents/PublicationsList/SinglePublication.js/SinglePublicationOpen';
import { NavBar } from './NavBar/NavBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_right',
			}}
			initialRouteName="Navigation"
		>
			<Stack.Screen name="Publication" component={SinglePublicationOpen} />
			<Stack.Screen name="Navigation" component={NavBar} />
		</Stack.Navigator>
	);
};
