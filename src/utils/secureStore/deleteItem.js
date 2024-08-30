import * as SecureStore from 'expo-secure-store';

export const deleteItem = async (key) => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log(error);
	}
};
