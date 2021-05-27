import { API } from './axios';
import { URL_INTERNSHIPS } from './urls';

export interface IIntenshipInfoInterface {
	name: string;
	description: string;
	skills?: { id: number; name: string; type: string; subtype: string }[];
	countries?: { id: number; name: string }[];
	specialities?: { id: number; name: string }[];
	status: string;
	startDate: number;
	endDate: number;
}
export const getInternshipDescription = async (
	id: number
): Promise<IIntenshipInfoInterface> => {
	const { data } = await API.get(`${URL_INTERNSHIPS}${id}`);
	return data;
};

export default getInternshipDescription;
