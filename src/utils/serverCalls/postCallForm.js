import axios from 'axios';
import { serverAdress } from '../../constants/routes';

export const postCallForm = async (URL, form) => {
	return await axios
		.post(serverAdress + URL, form, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		.then((response) => response.data)
		.catch((error) => {
			console.error(`${URL} : ${error.message}`);
			if (!error.response) {
				return { error: 'network' };
			}
		});
};
