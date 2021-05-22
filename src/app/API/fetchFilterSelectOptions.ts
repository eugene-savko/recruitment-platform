import { API } from './axios';
import { URL_INFORMATION } from './urls';

export const fetchFilterSelectOptions = async (): Promise<
	Array<typeof data>
> => {
	const { data } = await API.get(URL_INFORMATION, {
		withCredentials: true,
	});
	return data;
};
