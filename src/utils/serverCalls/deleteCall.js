import axios from 'axios';
import { serverAdress } from '../../constants/routes';

export const deleteCall = async (URL, data) => {
	return await axios
		.delete(serverAdress + URL, { data: data })
		.then((response) => response.data)
		.catch((error) => {
			console.error(`${URL} : ${error.message}`);
			if (!error.response) {
				return { error: 'network' };
			}
		});
};
