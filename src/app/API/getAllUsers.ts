import { IInternshipTableData } from 'app/pages/AdminPage/CandidateTable';
import { AxiosResponse } from 'axios';
import { API } from './axios';
import { URL_SEARCH_USERS } from './urls';

export interface ITableUser {
	internshipRequestId: number;
	userId: number;
	specialityName: string;
	countryName: string;
	statusName: string;
	lastName?: string;
	firstName?: string;
	fullName?: string;
	profile?: string;
}

interface ITableUserData {
	internshipRequests: Array<ITableUser>;
	pageSize: number;
	pageNumber: number;
	totalPageNumber: number;
}
export const getAllUsers = async (
	users: IInternshipTableData
): Promise<ITableUserData> => {
	const { data }: AxiosResponse<ITableUserData> = await API({
		method: 'post',
		url: URL_SEARCH_USERS,
		data: JSON.stringify(users),
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return data;
};
