import {
	DOWNLOAD_DISCOVER_PUBLICATIONS,
	DOWNLOAD_USER_PUBLICATIONS,
} from '../../redux/actions/publicationActions';
import { getItem } from '../secureStore';
import { postCall as fetchPublications } from '../serverCalls';

export const updatePublicationStorage = async (dispatch, type) => {
	const getPublications = {
		userPublication: async (token) =>
			await fetchPublications('/user/publications', {
				token: token,
			}),
		discoverPublication: async (token) =>
			await fetchPublications('/user/publications', {
				token: token,
			}),
	};

	const updateStorage = {
		userPublication: (data) => dispatch(DOWNLOAD_USER_PUBLICATIONS(data)),
		discoverPublication: (data) => dispatch(DOWNLOAD_DISCOVER_PUBLICATIONS(data)), //убрать DISCOVER
	};

	const token = await getItem('token');
	if (token) {
		const publications = await getPublications[type](token);
		updateStorage[type](publications.data.publications);
	}
};
