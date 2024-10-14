import axios from 'axios';
import { serverAdress } from '../../constants/routes';

export const postCall = async (URL, data) => {
	return await axios
		.post(serverAdress + URL, data)
		.then((response) => response.data)
		.catch((error) => {
			console.error(`${URL} : ${error.message}`);
			if (!error.response) {
				return { error: 'network' };
			}
		});
};
