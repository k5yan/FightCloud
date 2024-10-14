import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScaledSheet } from 'react-native-size-matters';
import { Main, Profile, Discover } from '../../screens';
import { ActionButton } from '../../baseComponents/ActionButton';
import {
	NAVBAR_BUTTON_ROSTER,
	NAVBAR_BUTTON_DISCOVER,
	NAVBAR_BUTTON_PROFILE,
} from '../../../constants/icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postCall as auth } from '../../../utils/serverCalls';
import { getItem } from '../../../utils/secureStore';
export const NavBar = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		//проверка входа во время запуска приложения
		async function userAuth() {
			try {
				const token = await getItem('token');
				if (token) {
					const user = await auth('/user/auth', { token: token });
					if (user) {
						dispatch({ type: 'LOGIN', payload: user });
					}
				}
			} catch (error) {
				console.log('userAuth: ', error);
			}
		}
		userAuth();
	}, []);

	const Tab = createBottomTabNavigator();
	const screenRoutes = {
		Main: 'Main',
		Discover: 'Discover',
		Profile: 'Profile',
	};

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.navBarContainer,
				tabBarHideOnKeyboard: true,
			}}
		>
			<Tab.Screen
				name={screenRoutes.Main}
				component={Main}
				options={({ navigation }) => ({
					tabBarShowLabel: false,
					tabBarButton: (props) => (
						<ActionButton
							{...props}
							font={'Icons'}
							icon={NAVBAR_BUTTON_ROSTER}
							onPress={() => navigation.navigate(screenRoutes.Main)}
							animation={'grow'}
							type={'tabBarButton'}
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
							font={'Icons'}
							icon={NAVBAR_BUTTON_DISCOVER}
							onPress={() => {
								navigation.navigate(screenRoutes.Discover);
							}}
							animation={'grow'}
							type={'tabBarButton'}
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
							font={'Icons'}
							icon={NAVBAR_BUTTON_PROFILE}
							onPress={() => navigation.navigate(screenRoutes.Profile)}
							animation={'grow'}
							type={'tabBarButton'}
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
