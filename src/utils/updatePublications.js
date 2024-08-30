import { getItem } from './secureStore';
import { request } from './serverCalls/request';
export const updatePublications = async (dispatch) => {
	const token = await getItem('token');
	const publications = await request('/user/publications', 'POST', {
		token: token,
	});
	dispatch({
		type: `DOWNLOAD_USER_PUBLICATIONS`,
		payload: publications.data.publications,
	});
};
