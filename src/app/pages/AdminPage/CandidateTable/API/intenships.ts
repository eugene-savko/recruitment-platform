import axios from 'axios';
import { IFilterOption } from '../types';

const API = axios.create({
	baseURL: 'https://recruitment-platform.herokuapp.com/api/',
	timeout: 1000,
});

export const fetchInternships = async (): Promise<Array<IFilterOption>> => {
	const url = '/internships/ids-names';
	const { data } = await API.get(url);
	return data;
};
