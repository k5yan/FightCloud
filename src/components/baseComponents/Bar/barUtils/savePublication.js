import { getItem } from '../../../../utils/secureStore';
import { updatePublicationStorage } from '../../../../utils/updaters';
import { postCallForm as sendPublication } from '../../../../utils/serverCalls';
import toastConfig from '../../../../utils/toastConfig/toastConfig';
export const savePublication = async (
	dispatch,
	data,
	files,
	type,
	toast,
	colorPalette,
) => {
	// const clearInputDraft = {
	// 	userPublication: () => dispatch({ type: 'CLEAR_USER_DRAFT' }),
	// 	discoverPublication: () => dispatch({ type: 'CLEAR_DISCOVER_DRAFT' }),
	// };
	const token = await getItem('token');

	if (token) {
		const publicationForm = new FormData();
		publicationForm.append('publicationText', data);
		publicationForm.append('token', token);
		files.forEach((file) => {
			publicationForm.append('files', file);
		});

		const publicateResult = await sendPublication('/publications', publicationForm);
		const alert = toastConfig(colorPalette, publicateResult.error);
		toast.show(
			alert.text[publicateResult.error]('publication', 'create'),
			alert.settings,
		);

		// clearInputDraft[type]();
		await updatePublicationStorage(dispatch, type);
	}
};
