import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigator } from './src/components/Navigator';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store, persistedStore } from './src/redux/store/reduxStore';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		SplashScreen.preventAutoHideAsync();
		async function prepare() {
			try {
				await loadAsync({
					'Icons': require('./src/assets/fonts/FightCloudIcons.ttf'),
					'PixyFont': require('./src/assets/fonts/PIXY.ttf'),
					'Test': require('./src/assets/fonts/icons2.ttf'),
				});
			} catch (error) {
				console.log('fontsLoad: ', error);
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
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistedStore}>
				<NavigationContainer>
					<HomeStackNavigator />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
