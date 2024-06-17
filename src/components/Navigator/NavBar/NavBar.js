import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScaledSheet } from 'react-native-size-matters';
import { Home, Profile, Discover } from '../../screens';
import { ActionButton } from '../../baseComponents/ActionButton';
import {
	NAVBAR_BUTTON_ROSTER,
	NAVBAR_BUTTON_DISCOVER,
	NAVBAR_BUTTON_PROFILE,
} from '../../../constants/icons';

export const NavBar = () => {
	const Tab = createBottomTabNavigator();

	const screenRoutes = {
		Home: 'Home',
		Discover: 'Discover',
		Profile: 'Profile',
	};

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.navBarContainer,
			}}
		>
			<Tab.Screen
				name={screenRoutes.Home}
				component={Home}
				options={({ navigation }) => ({
					tabBarShowLabel: false,
					tabBarButton: (props) => (
						<ActionButton
							{...props}
							icon={NAVBAR_BUTTON_ROSTER}
							onPress={() => navigation.navigate(screenRoutes.Home)}
							type={'TabBarButton'}
							color={{
								focused: '#F08080',
								unfocused: 'rgb(15, 187, 232)',
							}}
						/>
					),
				})}
			/>
			<Tab.Screen
				name={screenRoutes.Discover}
				component={Discover}
				options={({ navigation }) => ({
					tabBarShowLabel: false,
					tabBarButton: (props) => (
						<ActionButton
							{...props}
							icon={NAVBAR_BUTTON_DISCOVER}
							onPress={() => navigation.navigate(screenRoutes.Discover)}
							type={'TabBarButton'}
							color={{
								focused: '#F08080',
								unfocused: 'rgb(15, 187, 232)',
							}}
						/>
					),
				})}
			/>
			<Tab.Screen
				name={screenRoutes.Profile}
				component={Profile}
				options={({ navigation }) => ({
					tabBarShowLabel: false,
					tabBarButton: (props) => (
						<ActionButton
							{...props}
							icon={NAVBAR_BUTTON_PROFILE}
							onPress={() => navigation.navigate(screenRoutes.Profile)}
							type={'TabBarButton'}
							color={{
								focused: '#F08080',
								unfocused: 'rgb(15, 187, 232)',
							}}
						/>
					),
				})}
			/>
		</Tab.Navigator>
	);
};

const styles = ScaledSheet.create({
	navBarContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#e7e7ff',
	},
});
