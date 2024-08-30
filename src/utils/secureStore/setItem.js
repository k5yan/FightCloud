import * as SecureStore from 'expo-secure-store';
export const setItem = async (key, data) => {
	try {
		await SecureStore.setItemAsync(key, data);
	} catch (error) {
		console.log(error);
	}
};
