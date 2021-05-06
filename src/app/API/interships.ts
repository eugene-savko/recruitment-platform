import axios from 'axios';
import { ITrainingItem } from '../pages/HomePage/Trainings/types';

export const API = axios.create({
	baseURL: 'https://recruitment-platform.herokuapp.com/api/',
});

export const fetchInternships = async (
	id?: number | null | undefined
): Promise<Array<ITrainingItem>> => {
	const url =
		id !== undefined ? `internships/specialities/${id}` : 'internships/';
	const { data } = await API.get(url);
	return data;
};
