import * as DocumentPicker from 'expo-document-picker';
export const pickFile = async () => {
	const result = await DocumentPicker.getDocumentAsync({
		type: ['image/*'],
		copyToCacheDirectory: true,
	});

	if (!result.canceled) {
		const file = {
			uri: result.assets[0].uri,
			name: result.assets[0].name,
			type: result.assets[0].mimeType,
		};
		if (result.assets[0].mimeType.startsWith('image/')) {
			return file;
		}
	}
	return;
};
