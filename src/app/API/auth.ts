import IDataRole from '../pages/AuthPage/Auth/types/IDataRole';
import { API } from './axios';
import { URL_CURRENT_CANDIDATE, URL_LOGIN } from './urls';

export const fetchRequestLogin = async (
	username: string,
	password: string
): Promise<number> => {
	const { status } = await API({
		method: 'post',
		url: URL_LOGIN,
		data: new URLSearchParams({ username, password }),
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
	});
	return status;
};

export const getAccess = async (): Promise<IDataRole> => {
	const { data } = await API({
		method: 'get',
		url: URL_CURRENT_CANDIDATE,
		withCredentials: true,
	});
	return data;
};
