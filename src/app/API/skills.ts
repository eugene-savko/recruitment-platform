import { ISkills } from '../pages/AdminPage/CourseEditor/types';
import { API } from './axios';
import { URL_SKILLS } from './urls';

export const fetchSkills = async (): Promise<Array<ISkills>> => {
	const { data } = await API.get(URL_SKILLS, {
		withCredentials: true,
	});
	return data;
};
