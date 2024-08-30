import { request } from './request';
import { serverAdress } from '../../constants/routes';
import { useDispatch } from 'react-redux';

export const login = (data) => {
	return request('/login', 'POST', data);
};
