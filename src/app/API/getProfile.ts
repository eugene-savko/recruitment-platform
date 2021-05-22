import { IUserInfo } from 'app/pages/AdminPage/Profile/types';
import { API } from './axios';

const getProfile = async (id: number): Promise<IUserInfo> => {
	const url = `internship-request/${id}`;
	const { data } = await API.get(url);
	return data;
};

export default getProfile;
