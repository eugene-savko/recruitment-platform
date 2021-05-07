import { ITrainingItem } from 'app/pages/HomePage/Trainings/types';
import { API } from './axios';

export const fetchInternships = async (
	id?: number
): Promise<Array<ITrainingItem>> => {
	const url = id ? `internships/specialities/${id}` : 'internships/';
	const { data } = await API.get(url);
	return data;
};
