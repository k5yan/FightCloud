import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigator } from './src/components/Navigator';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppState, Keyboard, Platform, StatusBar } from 'react-native';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store, persistedStore } from './src/redux/store/reduxStore';
import { PersistGate } from 'redux-persist/integration/react';
import * as NavigationBar from 'expo-navigation-bar';
import { ToastProvider } from 'react-native-toast-notifications';

export default function App() {
	if (__DEV__) {
		require('./ReactotronConfig');
	}
	// console.warn = (msg) => {
	// 	if (
	// 		msg.includes(
	// 			'Non-serializable values were found in the navigation state. Check:',
	// 		)
	// 	) {
	// 		return;
	// 	} else {
	// 		console.warn(msg);
	// 	}
	// }; //убрал надоедливое предупреждение, оно в моем случае ничем не грозит
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		AppState.addEventListener('change', async (appState) => {
			if (appState === 'active') {
				await NavigationBar.setVisibilityAsync('hidden');
				await NavigationBar.setBehaviorAsync('overlay-swipe');
			}
		});
		Keyboard.addListener('keyboardDidShow', async () => {
			await NavigationBar.setVisibilityAsync('visible');
		});
		Keyboard.addListener('keyboardDidHide', async () => {
			await NavigationBar.setVisibilityAsync('hidden');
		});
		SplashScreen.preventAutoHideAsync();
		async function prepare() {
			try {
				await loadAsync({
					'Icons': require('./src/assets/fonts/FightCloudIcons.ttf'),
					'PixyFont': require('./src/assets/fonts/PIXY.ttf'),
					'Test': require('./src/assets/fonts/icons2.ttf'),
				});
				await NavigationBar.setVisibilityAsync('hidden');
				await NavigationBar.setBehaviorAsync('overlay-swipe');
			} catch (error) {
				console.log('fontsLoad: ', error);
			} finally {
				setDataLoaded(true);
			}
		}
		//загрузка шрифтов и скрытие навбара
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
				<ToastProvider
					swipeEnabled={true}
					offsetTop={Platform.OS === 'android' ? StatusBar.currentHeight : 0}
				>
					<NavigationContainer>
						<HomeStackNavigator />
					</NavigationContainer>
				</ToastProvider>
			</PersistGate>
		</Provider>
	);
}
