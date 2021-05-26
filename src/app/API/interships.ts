import { ITrainingItem } from 'app/pages/HomePage/Trainings/types';
import { API } from './axios';
import { URL_INTERNSHIPS, URL_INTERNSHIPS_SPECIALITIES } from './urls';

export const fetchInternships = async (
	id?: number
): Promise<Array<ITrainingItem>> => {
	const url = id
		? `${URL_INTERNSHIPS_SPECIALITIES}${id}`
		: `${URL_INTERNSHIPS}`;
	const { data } = await API.get(url);
	return data;
};
