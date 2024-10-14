import { postCall as fetchPublications } from '../../serverCalls';
import { getItem } from '../../secureStore';
import {
	DOWNLOAD_DISCOVER_PUBLICATIONS,
	DOWNLOAD_USER_PUBLICATIONS,
} from '../../../redux/actions/publicationActions';

export default async (dispatch, type) => {
	const getPublications = {
		Profile: async () =>
			await fetchPublications('/user/publications', {
				token: token,
				query: {
					search: '',
					limit: 10,
					page: 1,
					//немного костыль
				},
			}),
		Discover: async () =>
			await fetchPublications('/publications/list', {
				token: token,
				query: {
					search: '',
					limit: 10,
					page: 1,
				},
			}),
	};

	const screen = {
		Profile: (data) => DOWNLOAD_USER_PUBLICATIONS(data),
		Discover: (data) => DOWNLOAD_DISCOVER_PUBLICATIONS(data),
	};

	const token = await getItem('token');
	if (token) {
		const publications = await getPublications[type]();
		dispatch(screen[type](publications.data.publications));
	}
};
