import { IInternshipOption } from '../pages/AdminPage/CandidateTable/types';
import { API } from './axios';
import { URL_LIST_INTERNSHIP_USERS } from './urls';

export const getListInternships = async (): Promise<
	Array<IInternshipOption>
> => {
	const { data } = await API.get(URL_LIST_INTERNSHIP_USERS, {
		withCredentials: true,
	});
	return data;
};
