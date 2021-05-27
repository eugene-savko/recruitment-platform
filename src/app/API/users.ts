import { IUsers } from '../pages/AdminPage/CourseEditor/types';
import { API } from './axios';
import { URL_USERS_SPECIALISTS } from './urls';

export const fetchUsers = async (): Promise<Array<IUsers>> => {
	const { data } = await API.get(URL_USERS_SPECIALISTS, {
		withCredentials: true,
	});
	return data;
};
