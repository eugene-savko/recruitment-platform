import { ITimeStamp } from 'app/pages/TrainingPage/SendForm/types';
import { API } from './axios';
import { URL_TIME_INTERVAL } from './urls';

export const fetchTimeStamp = async (): Promise<Array<ITimeStamp>> => {
	const url = `${URL_TIME_INTERVAL}`;
	const { data } = await API.get(url);

	return data;
};
