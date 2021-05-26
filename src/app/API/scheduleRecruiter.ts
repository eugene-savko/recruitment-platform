import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import axios from 'axios';
import { ICurrentCandidate } from 'app/pages/AdminPage/ScheduleRecruiter/types';
import IListRecruiters from '../pages/AdminPage/ScheduleRecruiter/types/IListRecruiters';
import IAddedAppointment from '../pages/AdminPage/ScheduleRecruiter/types/IAddedAppointment';
import { API } from './axios';
import {
	URL_CALENDAR,
	URL_INTERNSHIP_REQUEST,
	URL_USERROLE_INTERNSHIP,
} from './urls';

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
		throw new Error('You did not receive list of interviewers');
	}
};

export const fetchListAppointments = async (
	role: string,
	internshipid: number
): Promise<Array<AppointmentModel>> => {
	try {
		const { data } = await API({
			url: `${URL_CALENDAR}userRole=${role}&internshipId=${internshipid}`,
			method: 'get',
		});

		// const time =
		// new Date('2021-05-26T14:30').getTime() -
		// new Date('2021-05-26T14:30').getTimezoneOffset() * 60;
		// console.log(data[5].startDate);
		// console.log(new Date().getTime());
		// console.log(new Date().getTime() - new Date().getTimezoneOffset() * 60);
		// console.log(new Date().getTime());
		// console.log(new Date().getTimezoneOffset() * 60);

		// const time = new Date().getTime() - new Date().getTimezoneOffset() * 60;

		// console.log('minum 3', time);
		// console.log(new Date().getTime());

		const listAppointments = data.map(
			({ id, firstName, lastName, recruiterId, startDate, endDate }: any) => ({
				id,
				title: `${firstName} ${lastName}`,
				allDay: false,
				members: recruiterId,
				startDate,
				endDate,
				// startDate: startDate - new Date(startDate).getTimezoneOffset() * 60,
				// endDate: endDate - new Date(endDate).getTimezoneOffset() * 60,
			})
		);
		return listAppointments;
	} catch (error) {
		throw new Error('You did not receive list of appointments');
	}
};

export const addedAppointment = async (
	addedData: IAddedAppointment
): Promise<IAddedAppointment> => {
	try {
		const { data } = await axios({
			url: `https://recruitment-platform.herokuapp.com/api/calendars`,
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
		console.log(error);
		throw new Error('You did not post appointment');
	}
};

export const putAppointment = async (
	userId: number,
	appointmentChanged: AppointmentModel
	// eslint-disable-next-line consistent-return
): Promise<AppointmentModel | void> => {
	console.log('Profile users', userId);
	console.log('appointment ID', appointmentChanged.id);
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
		console.log(data);
		return data;
	} catch (error) {
		console.dir(error);

		// throw new Error('You do not change appointment');
	}
};

// export const patchCurrentCandidate = async (
// 	puttedInfo: AppointmentModel,
// 	id: number,
// 	recruiter: string
// ): Promise<void> => {
// 	const { startDate } = puttedInfo;
// 	try {
// 		const { data } = await axios({
// 			url: `http://localhost:4000/candidate/${id}`,
// 			method: 'put',
// 			withCredentials: true,
// 			data: {
// 				id: 21,
// 				firstName: 'Julia',
// 				lastName: 'Red',
// 				email: 'julia.red@gmail.com',
// 				country: 'Ukraine',
// 				city: 'Kiev',
// 				phone: '+37529-689-45-89',
// 				otherInformation: 'Hello!',
// 				speciality: 'Java',
// 				englishLevel: 'B1',
// 				cv: 'some link',
// 				internship: 'Java & Javascript Internship',
// 				interviews: [
// 					{
// 						id: 1,
// 						feedback: '',
// 						englishLevel: null,
// 						fromUser: {
// 							id: 1,
// 							firstName: 'Alice',
// 							lastName: 'Blue',
// 							role: 'SPECIALIST',
// 						},
// 						startDateTime: 1622451600000,
// 						endDateTime: 1622453400000,
// 					},
// 					{
// 						id: 2,
// 						feedback: '',
// 						englishLevel: null,
// 						fromUser: {
// 							id: 24,
// 							firstName: recruiter,
// 							lastName: 'Green',
// 							role: 'RECRUITER',
// 						},
// 						startDateTime: new Date(startDate).getTime(),
// 						endDateTime: 1622460600000,
// 					},
// 				],
// 				startPriorityTime: 1622451600000,
// 				endPriorityTime: 1622460600000,
// 			},
// 			headers: { 'Content-Type': 'application/json' },
// 		});
// 		return data;
// 	} catch (error) {
// 		throw new Error('You did not change info about candidate');
// 	}
// };

// export const putAppointment = async (
// 	userId: number,
// 	dataToServerChange: AppointmentModel
// ): Promise<AppointmentModel> => {
// 	console.log(dataToServerChange);
// 	try {
// 		const { data } = await axios({
// 			url: `https://recruitment-platform.herokuapp.com/api/calendars`,
// 			// url: `http://localhost:4000/scheduler${role}${internshipid}/${dataToServerChange.id}`,
// 			method: 'put',
// 			data: {
// 				id: 56,
// 				internshipRequestId: userId,

// 				// ...dataToServerChange,
// 			},
// 			headers: { 'Content-Type': 'application/json' },
// 		});
// 		return data;
// 	} catch (error) {
// 		throw new Error('You do not change appointment');
// 	}
// };

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
