import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import axios from 'axios';
import moment from 'moment';
import {
	ICurrentCandidate,
	IDatabaseCandidates,
} from 'app/pages/AdminPage/ScheduleRecruiter/types';
import IListRecruiters from '../pages/AdminPage/ScheduleRecruiter/types/IListRecruiters';
import IAddedAppointment from '../pages/AdminPage/ScheduleRecruiter/types/IAddedAppointment';

export const fetchCurrentCandidate = async (
	id: number
): Promise<ICurrentCandidate> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/candidate/${id}`,
			method: 'get',
		});
		return data;
	} catch (error) {
		throw new Error('You did not receive a candidate');
	}
};

export const fetchListCandidate = async (): Promise<
	Array<IDatabaseCandidates>
> => {
	try {
		const { data } = await axios({
			url: 'http://localhost:4000/databaseCandidates',
			method: 'get',
		});
		return data;
	} catch (error) {
		throw new Error('You did not receive list of recruiter');
	}
};

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
				startDate: moment(addedData?.startDate).valueOf(),
				endDate: moment(addedData?.endDate).valueOf(),
			},
			headers: { 'Content-Type': 'application/json' },
		});

		return data;
	} catch (error) {
		throw new Error('You did not post appointment');
	}
};

export const changedAppointment = async (
	dataToServerChange: AppointmentModel
): Promise<AppointmentModel> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/schedulerData/${dataToServerChange.id}`,
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
