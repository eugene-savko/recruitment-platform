import { ISpecialityOption } from 'app/pages/AdminPage/CandidateTable/types';
import { API } from './axios';
import { URL_INFORMATION } from './urls';

interface IFetchedFilterOptions {
	specialities: Array<ISpecialityOption>;
	statuses: Array<Record<string, string>>;
}
export const getFilterOptions = async (
	id: number | string
): Promise<IFetchedFilterOptions> => {
	let url = `${URL_INFORMATION}${id}`;
	if (!id) {
		url = `${URL_INFORMATION}1`;
	}
	const { data } = await API(url, {
		withCredentials: true,
	});
	return data;
};
