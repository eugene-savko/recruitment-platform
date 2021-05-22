import { IFilterOption } from '../pages/AdminPage/CandidateTable/types';
import { API } from './axios';
import { URL_INTERNSHIPS } from './urls';

export const fetchInternships = async (): Promise<Array<IFilterOption>> => {
	const { data } = await API.get(URL_INTERNSHIPS, {
		withCredentials: true,
	});
	return data;
};
