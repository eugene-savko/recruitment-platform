import { ISpecialties } from '../pages/AdminPage/CourseEditor/types';
import { API } from './axios';
import { URL_SPECIALTIES } from './urls';

export const fetchSpecialties = async (): Promise<Array<ISpecialties>> => {
	const { data } = await API.get(URL_SPECIALTIES, {
		withCredentials: true,
	});
	return data;
};
