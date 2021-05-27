import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import axios, { AxiosError } from 'axios';
import { ICurrentCandidate } from 'app/pages/AdminPage/ScheduleRecruiter/types';

import Swal from 'sweetalert2';
import IListRecruiters from '../pages/AdminPage/ScheduleRecruiter/types/IListRecruiters';
import IAddedAppointment from '../pages/AdminPage/ScheduleRecruiter/types/IAddedAppointment';
import { API } from './axios';
import {
	URL_CALENDAR,
	URL_CALENDAR_ROLES,
	URL_INTERNSHIP_REQUEST,
	URL_USERROLE_INTERNSHIP,
} from './urls';

const alertError = (serverError: AxiosError) => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: `${serverError.response?.data.errorMessage}`,
	});
};

export const fetchCurrentCandidate = async (
	id: number
): Promise<ICurrentCandidate> => {
	try {
		const { data } = await API({
			url: `${URL_INTERNSHIP_REQUEST}/${id}`,
			method: 'get',
		});
		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const fetchListInterviewers = async (
	role: string,
	internshipId: number
): Promise<Array<IListRecruiters>> => {
	try {
		const { data } = await API({
			url: `${URL_USERROLE_INTERNSHIP}userRole=${role}&internshipId=${internshipId}`,
			method: 'get',
		});

		const listRecruiter = data.map((recruiter: IListRecruiters) => ({
			id: recruiter.id,
			text: `${recruiter.firstName} ${recruiter.lastName}`,
			color: 'indigo',
		}));

		return listRecruiter;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const fetchListAppointments = async (
	role: string,
	internshipid: number
): Promise<Array<AppointmentModel>> => {
	try {
		const { data } = await API({
			url: `${URL_CALENDAR_ROLES}userRole=${role}&internshipId=${internshipid}`,
			method: 'get',
		});
		const listAppointments = data.map(
			({ id, firstName, lastName, recruiterId, startDate, endDate }: any) => ({
				id,
				title: `${firstName} ${lastName}`,
				allDay: false,
				members: recruiterId,
				startDate,
				endDate,
			})
		);
		return listAppointments;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const addedAppointment = async (
	addedData: IAddedAppointment
): Promise<IAddedAppointment> => {
	try {
		const { data } = await API({
			url: URL_CALENDAR,
			method: 'post',
			withCredentials: true,
			data: {
				...addedData,
			},
			headers: { 'Content-Type': 'application/json' },
		});

		const createdAppointment = {
			title: `${data.firstName} ${data.lastName}`,
			allDay: false,
			members: data.recruiterId,
			endDate: data.endDate,
			startDate: data.startDate,
			id: 1,
		};
		return createdAppointment;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const putAppointment = async (
	userId: number,
	appointmentChanged: AppointmentModel
): Promise<AppointmentModel | void> => {
	try {
		const { data } = await axios({
			url: `https://recruitment-platform.herokuapp.com/api/calendars`,
			method: 'put',
			withCredentials: true,
			data: {
				id: appointmentChanged.id,
				internshipRequestId: userId,
			},
			headers: { 'Content-Type': 'application/json' },
		});
		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};
