import axios from 'axios';
import IDataRole from '../pages/AuthPage/Auth/types/IDataRole';

export const fetchRequestLogin = async (
	username: string,
	password: string
): Promise<number> => {
	const { status } = await axios({
		method: 'POST',
		url: 'https://recruitment-platform.herokuapp.com/login',
		data: new URLSearchParams({ username, password }),
		withCredentials: true,
		headers: {
			Cookie: 'Thu, 20 May 2021 18:24:57 GMT',
			Accept: 'application/x-www-form-urlencoded',
			'content-type': 'application/x-www-form-urlencoded',
		},
	});
	return status;
};

export const getAccess = async (): Promise<IDataRole> => {
	const { data } = await axios({
		method: 'get',
		url: 'https://recruitment-platform.herokuapp.com/users/current',
		withCredentials: true,
	});
	return data;
};
