import { getItem } from '../../../../../../../../utils/secureStore';
import { patchCall as redactComment } from '../../../../../../../../utils/serverCalls';
import toastConfig from '../../../../../../../../utils/toastConfig/toastConfig';
export default async (textValue, publicationId, commentId, toast, colorPalette) => {
	const token = await getItem('token');
	if (token) {
		const editResult = await redactComment(
			`/publications/${publicationId}/comments/${commentId}`,
			{
				comment: { text: textValue },
				token: token,
			},
		);
		const alert = toastConfig(colorPalette, editResult.error);
		toast.show(alert.text[editResult.error]('comment', 'edit '), alert.settings);
	}
};
