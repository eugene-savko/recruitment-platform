import { API } from './axios';

interface IProfile {
	[name: string]: string;
}

const getProfile = async (): Promise<IProfile> => {
	const url = '';
	const { data } = await API.get(url);
	return data;
};

export default getProfile;
