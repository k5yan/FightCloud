import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigator } from './src/components/Navigator';
import { useEffect, useState } from 'react';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		SplashScreen.preventAutoHideAsync();
		async function prepare() {
			try {
				await loadAsync({
					'Icons': require('./src/assets/fonts/FightCloudIcons.ttf'),
					'PixyFont': require('./src/assets/fonts/PIXY.ttf'),
					'Test': require('./src/assets/fonts/Icomoon.ttf'),
				});
			} catch (error) {
				console.log(error);
			} finally {
				setDataLoaded(true);
			}
		}

		prepare();
	}, []);

	if (dataLoaded) {
		SplashScreen.hideAsync();
	} else {
		return undefined;
	}
	return (
		<NavigationContainer>
			<HomeStackNavigator />
		</NavigationContainer>
	);
}
