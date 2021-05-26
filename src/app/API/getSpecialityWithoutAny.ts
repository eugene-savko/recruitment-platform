import { IListItemSelect } from 'app/pages/TrainingPage/SendForm/types';
import { API } from './axios';
import { URL_SPECIALITIES } from './urls';

export const fetchSpecialitiesWithoutAny = async (): Promise<
	Array<IListItemSelect>
> => {
	const { data } = await API.get(URL_SPECIALITIES);
	return data;
};
