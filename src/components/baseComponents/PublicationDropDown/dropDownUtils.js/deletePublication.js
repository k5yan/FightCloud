import { getItem } from '../../../../utils/secureStore';
import { deleteCall as removePublication } from '../../../../utils/serverCalls';
import { updatePublicationStorage } from '../../../../utils/updaters';
import toastConfig from '../../../../utils/toastConfig/toastConfig';

export const deletePublication = async ({
	dispatch,
	publicationId,
	type,
	toast,
	colorPalette,
}) => {
	const token = await getItem('token');
	if (token) {
		const deletingResult = await removePublication(`/publications/${publicationId}`, {
			token: token,
		});
		const alert = toastConfig(colorPalette, deletingResult.error);

		toast.show(
			alert.text[deletingResult.error]('publication', 'delete'),
			alert.settings,
		);
		await updatePublicationStorage(dispatch, type);
	}
};
