import axios from 'axios';
import IDataRole from '../pages/AuthPage/Auth/types/IDataRole';
import { currentCandidate, login } from './urls';

export const fetchRequestLogin = async (
	username: string,
	password: string
): Promise<number> => {
	const { status } = await axios({
		method: 'post',
		url: login,
		data: new URLSearchParams({ username, password }),
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
	});
	return status;
};

export const getAccess = async (): Promise<IDataRole> => {
	const { data } = await axios({
		method: 'get',
		url: currentCandidate,
		withCredentials: true,
	});
	return data;
};
