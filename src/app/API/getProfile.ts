import { IUserInfo } from 'app/pages/AdminPage/Profile/types';
import { API } from './axios';
import { URL_INTERNSHIP_REQUEST } from './urls';

const getProfile = async (id: number): Promise<IUserInfo> => {
	const url = `${URL_INTERNSHIP_REQUEST}/${id}`;
	const { data } = await API.get(url);
	return data;
};

export default getProfile;
