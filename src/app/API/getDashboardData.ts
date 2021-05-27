import { Internship } from '../pages/AdminPage/DashBoard/types/internshipTypes';
import { API } from './axios';
import { URL_DASHBOARD_DATA } from './urls';

export const fetchDashboardData = async (): Promise<Array<Internship>> => {
	const { data } = await API.get(URL_DASHBOARD_DATA);
	return data;
};
