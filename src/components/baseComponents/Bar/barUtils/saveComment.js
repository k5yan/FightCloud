import { getItem } from '../../../../utils/secureStore';
import { postCall as sendComment } from '../../../../utils/serverCalls';
import { updateCommentStorage } from '../../../../utils/updaters';
import toastConfig from '../../../../utils/toastConfig/toastConfig';
export const saveComment = async (dispatch, publicationId, data, toast, colorPalette) => {
	const token = await getItem('token');
	if (token) {
		const publicateResult = await sendComment(
			`/publications/${publicationId}/comment`,
			{
				comment: {
					text: data,
				},
				token: token,
			},
		);
		const alert = toastConfig(colorPalette, publicateResult.error);
		toast.show(
			alert.text[publicateResult.error]('comment', 'create'),
			alert.settings,
		);

		await updateCommentStorage(dispatch, publicationId);
	}
};
