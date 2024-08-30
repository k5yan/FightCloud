import * as SecureStore from 'expo-secure-store';
export const getItem = async (key) => {
	let item;
	try {
		item = await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log(error);
	}
	return item;
};
