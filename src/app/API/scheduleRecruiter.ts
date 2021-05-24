import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import axios from 'axios';
import { ICurrentCandidate } from 'app/pages/AdminPage/ScheduleRecruiter/types';
import IListRecruiters from '../pages/AdminPage/ScheduleRecruiter/types/IListRecruiters';
import IAddedAppointment from '../pages/AdminPage/ScheduleRecruiter/types/IAddedAppointment';
import { API } from './axios';
import { URL_INTERNSHIP_REQUEST } from './urls';

export const fetchCurrentCandidate = async (
	id: number
): Promise<ICurrentCandidate> => {
	try {
		const { data } = await API({
			url: `${URL_INTERNSHIP_REQUEST}${id}`,
			method: 'get',
		});
		return data;
	} catch (error) {
		throw new Error('You did not receive a candidate');
	}
};

export const fetchListInterviewers = async (
	role: string
): Promise<Array<IListRecruiters>> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/${role}`,
			method: 'get',
		});
		return data;
	} catch (error) {
		throw new Error('You did not receive list of interviewers');
	}
};

export const fetchListAppointments = async (
	role: string,
	internshipid: number
): Promise<Array<AppointmentModel>> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/scheduler${role}${internshipid}`,
			method: 'get',
		});
		return data;
	} catch (error) {
		throw new Error('You did not receive list of appointments');
	}
};

export const addedAppointment = async (
	addedData: IAddedAppointment,
	role: string,
	internshipid: number
): Promise<IAddedAppointment> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/scheduler${role}${internshipid}`,
			method: 'post',
			data: {
				...addedData,
			},
			headers: { 'Content-Type': 'application/json' },
		});

		return data;
	} catch (error) {
		throw new Error('You did not post appointment');
	}
};

export const patchCurrentCandidate = async (
	puttedInfo: AppointmentModel,
	id: number,
	recruiter: string
): Promise<void> => {
	const { startDate } = puttedInfo;
	try {
		const { data } = await axios({
			url: `http://localhost:4000/candidate/${id}`,
			method: 'put',
			data: {
				id: 21,
				firstName: 'Julia',
				lastName: 'Red',
				email: 'julia.red@gmail.com',
				country: 'Ukraine',
				city: 'Kiev',
				phone: '+37529-689-45-89',
				otherInformation: 'Hello!',
				speciality: 'Java',
				englishLevel: 'B1',
				cv: 'some link',
				internship: 'Java & Javascript Internship',
				interviews: [
					{
						id: 1,
						feedback: '',
						englishLevel: null,
						fromUser: {
							id: 1,
							firstName: 'Alice',
							lastName: 'Blue',
							role: 'SPECIALIST',
						},
						startDateTime: 1622451600000,
						endDateTime: 1622453400000,
					},
					{
						id: 2,
						feedback: '',
						englishLevel: null,
						fromUser: {
							id: 24,
							firstName: recruiter,
							lastName: 'Green',
							role: 'RECRUITER',
						},
						startDateTime: new Date(startDate).getTime(),
						endDateTime: 1622460600000,
					},
				],
				startPriorityTime: 1622451600000,
				endPriorityTime: 1622460600000,
			},
			headers: { 'Content-Type': 'application/json' },
		});
		return data;
	} catch (error) {
		throw new Error('You did not change info about candidate');
	}
};

export const putAppointment = async (
	role: string,
	internshipid: number,
	dataToServerChange: AppointmentModel
): Promise<AppointmentModel> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/scheduler${role}${internshipid}/${dataToServerChange.id}`,
			method: 'put',
			data: {
				...dataToServerChange,
			},
			headers: { 'Content-Type': 'application/json' },
		});
		return data;
	} catch (error) {
		throw new Error('You do not change appointment');
	}
};
export const deleteAppointment = async (
	appointment: AppointmentModel
): Promise<void> => {
	try {
		await axios({
			url: `http://localhost:4000/schedulerData/${appointment.id}`,
			method: 'delete',
		});
	} catch (error) {
		throw new Error('You do not delete appointment');
	}
};
