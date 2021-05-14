import { IFilterOption } from '../pages/AdminPage/CandidateTable/types';
import { API } from './axios';

export const fetchInternships = async (): Promise<Array<IFilterOption>> => {
	const url = '/internships/ids-names';
	const { data } = await API.get(url);
	return data;
};
