import { serverAdress } from '../../constants/routes';
export const request = async (URL, method, data) => {
	const response = await fetch(serverAdress + URL, {
		headers: {
			'content-type': 'application/json',
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined,
	})
		.then((response) => response.json())
		.catch((error) => console.log('request:', error));

	return response;
};
