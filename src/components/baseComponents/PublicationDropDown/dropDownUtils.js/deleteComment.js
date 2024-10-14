import { getItem } from '../../../../utils/secureStore';
import { deleteCall as removeComment } from '../../../../utils/serverCalls';
import { updateCommentStorage } from '../../../../utils/updaters';
import toastConfig from '../../../../utils/toastConfig/toastConfig';
export const deleteComment = async (
	dispatch,
	publicationId,
	commentId,
	toast,
	colorPalette,
) => {
	const token = await getItem('token');
	if (token) {
		const deletingResult = await removeComment(
			`/publications/${publicationId}/comments/${commentId}`,
			{
				token: token,
			},
		);

		const alert = toastConfig(colorPalette, deletingResult.error);
		toast.show(alert.text[deletingResult.error]('comment', 'delete'), alert.settings);
		await updateCommentStorage(dispatch, publicationId);
	}
};
