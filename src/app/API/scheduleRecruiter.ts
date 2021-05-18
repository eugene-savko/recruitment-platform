import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import axios from 'axios';
import { ICurrentCandidate } from 'app/pages/AdminPage/ScheduleRecruiter/types';
import moment from 'moment';
import IListRecruiters from '../pages/AdminPage/ScheduleRecruiter/types/IListRecruiters';
import IAddedAppointment from '../pages/AdminPage/ScheduleRecruiter/types/IAddedAppointment';

export const fetchCurrentCandidate = async (
	id: number
): Promise<ICurrentCandidate> => {
	try {
		const { data } = await axios({
			url: `https://recruitment-platform.herokuapp.com/internship-request/${id}`,
			method: 'get',
			withCredentials: true,
		});
		return data;
	} catch (error) {
		throw new Error('You did not receive a candidate');
	}
};
// export const fetchCurrentCandidate = async (
// 	id: number
// ): Promise<ICurrentCandidate> => {
// 	try {
// 		const { data } = await axios({
// 			url: `http://localhost:4000/candidate/${id}`,
// 			method: 'get',
// 		});
// 		return data;
// 	} catch (error) {
// 		throw new Error('You did not receive a candidate');
// 	}
// };

export const fetchListRecruiters = async (): Promise<
	Array<IListRecruiters>
> => {
	try {
		const { data } = await axios({
			url: 'http://localhost:4000/recruiters',
			method: 'get',
		});
		return data;
	} catch (error) {
		throw new Error('You did not receive list of recruiter');
	}
};

export const fetchListAppointments = async (): Promise<
	Array<AppointmentModel>
> => {
	try {
		const { data } = await axios({
			url: 'http://localhost:4000/schedulerData',
			method: 'get',
		});
		return data;
	} catch (error) {
		throw new Error('You did not receive list of recruiter');
	}
};

export const addedAppointment = async (
	addedData: IAddedAppointment
): Promise<IAddedAppointment> => {
	try {
		const { data } = await axios({
			url: 'http://localhost:4000/schedulerData',
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

// todo change patch to put
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
				otherInformation: '+37529-689-45-89',
				specialityId: 1,
				englishLevel: 'B1',
				cv: 'some link',
				internshipId: 1,
				interviews: [
					{
						id: 1,
						feedback: '',
						englishLevel: null,
						startDateTime: 1622451600000,
						fromUser: {
							id: 1,
							firstName: 'Alice',
							lastName: 'Blue',
							role: 'SPECIALIST',
						},
					},
					{
						id: 2,
						feedback: '',
						englishLevel: null,
						startDateTime: moment(startDate).valueOf(),
						fromUser: {
							id: 24,
							firstName: recruiter,
							lastName: 'Green',
							role: 'RECRUITER',
						},
					},
				],
				// recruiterInterview: recruiter,
				// startDateRecruiter: moment(startDate).valueOf(),
			},
			headers: { 'Content-Type': 'application/json' },
		});
		return data;
	} catch (error) {
		throw new Error('You did not change info about candidate');
	}
};

export const putAppointment = async (
	dataToServerChange: AppointmentModel
): Promise<AppointmentModel> => {
	const { startDate, endDate } = dataToServerChange;
	try {
		const { data } = await axios({
			url: `http://localhost:4000/schedulerData/${dataToServerChange.id}`,
			method: 'put',
			data: {
				...dataToServerChange,
				startDate: moment(startDate).valueOf(),
				endDate: moment(endDate).valueOf(),
			},
			headers: { 'Content-Type': 'application/json' },
		});
		return data;
	} catch (error) {
		throw new Error('You do not change appointment');
	}
};
// todo преписать на пустую строку
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
