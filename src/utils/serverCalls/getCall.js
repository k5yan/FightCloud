import axios from 'axios';
import { serverAdress } from '../../constants/routes';

export const getCall = async (URL) => {
	return await axios
		.get(serverAdress + URL)
		.then((response) => response.data)
		.catch((error) => {
			console.error(`${URL} : ${error.message}`);
			if (!error.response) {
				return { error: 'network' };
			}
		});
};
