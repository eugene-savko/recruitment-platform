// todo кнопуку выхода на profile

import { useState, useCallback, useEffect } from 'react';
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler';

import {
	deleteAppointment,
	putAppointment,
	fetchListAppointments,
	addedAppointment,
} from 'app/API/scheduleRecruiter';
import moment from 'moment';
import { IUseChangeEditingState } from '../types';
import { patchCurrentCandidate } from '../../../../API/scheduleRecruiter';
import IListRecruiters from '../types/IListRecruiters';

export const useChangeEditingState = (
	listRecruters: Array<IListRecruiters>
): IUseChangeEditingState => {
	const [data, setData] = useState<Array<AppointmentModel>>([]);

	useEffect(() => {
		const fetchData = async () => {
			const listAppointments = await fetchListAppointments();
			setData(listAppointments);
		};
		fetchData();
	}, []);

	const commitChanges = useCallback(
		({ added, changed, deleted }: ChangeSet) => {
			if (added) {
				const addedData = {
					title: added.title,
					allDay: added.allDay,
					members: added.members,
					endDate: moment(added.endDate).valueOf(),
					startDate: moment(added.startDate).valueOf(),
				};

				const addedAppointmentAndRefreshDadaAppointment = async () => {
					const addedAppointmentFromServer = await addedAppointment(addedData);
					const dataAdded = [...data, { ...addedAppointmentFromServer }];
					setData(dataAdded);
				};
				addedAppointmentAndRefreshDadaAppointment();
			}

			if (changed) {
				const dataChanged: AppointmentModel[] = data.map((appointment) => {
					if (appointment.id !== undefined) {
						return changed[appointment.id]
							? {
									...appointment,
									...changed[appointment.id],
							  }
							: appointment;
					}
					return appointment;
				});
				setData(dataChanged);

				const appointmentChanged = dataChanged.filter((appointment) => {
					return appointment.id !== undefined
						? changed[appointment.id]
						: appointment;
				});

				putAppointment(appointmentChanged[0]);

				const currentRecruiter = listRecruters.filter(
					(recruiter: IListRecruiters) =>
						recruiter.id === appointmentChanged[0].members
				);

				//! --------------------------------------------------------передача текущего кандидата
				patchCurrentCandidate(
					appointmentChanged[0],
					2,
					currentRecruiter[0].text
				);
			}

			if (deleted !== undefined) {
				const dataDeleted = data.filter(
					(appointment) => appointment.id !== deleted
				);

				data.forEach((appointment) => {
					if (appointment.id === deleted) {
						deleteAppointment(appointment);
					}
				});
				setData(dataDeleted);
			}
		},
		[data, setData]
	);

	return { commitChanges, data };
};
