import { DOWNLOAD_COMMENTS } from '../../redux/actions/publicationActions';
import { getItem } from '../secureStore';
import { postCall as getComments, getCall as getCommentIds } from '../serverCalls';

export const updateCommentStorage = async (dispatch, publicationId) => {
	const token = await getItem('token');
	if (token) {
		const commentIds = await getCommentIds(
			`/publications/${publicationId}/commentIds`,
		);
		const comments = await getComments(`/publications/${publicationId}/comments`, {
			commentIds: commentIds,
			token: token,
		});
		dispatch(DOWNLOAD_COMMENTS(comments));
	}
};
