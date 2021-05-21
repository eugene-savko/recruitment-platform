import { IUserInfo } from 'app/pages/AdminPage/Profile/types';
import { API } from './axios';
import { INTERNSHIP_REQUEST } from './urls';

const getProfile = async (id: number): Promise<IUserInfo> => {
	const url = `${INTERNSHIP_REQUEST}/${id}`;
	const { data } = await API.get(url);
	return data;
};

export default getProfile;
