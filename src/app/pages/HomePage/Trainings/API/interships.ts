import axios from 'axios';
import { ITrainingItem } from '../types';

export const API = axios.create({
	baseURL: 'https://recruitment-platform.herokuapp.com/api/',
});

export const fetchInternships = async (
	id?: number | null | undefined
): Promise<Array<ITrainingItem>> => {
	if (id) {
		const { data } = await API.get(`internships/specialities/${id}`);
		return data;
	}
	const { data } = await API.get(`internships/`);
	return data;
};
