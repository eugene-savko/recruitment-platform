// todo bus при редактировнии время
import { useState, useCallback, useEffect } from 'react';
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler';

import {
	deleteAppointment,
	changedAppointment,
	fetchListAppointments,
	addedAppointment,
} from 'app/API/scheduleRecruiter';
import { IUseChangeEditingState } from '../types';

export const useChangeEditingState = (): IUseChangeEditingState => {
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
					allDay: added.allDay,
					endDate: added.endDate,
					members: added.members,
					startDate: added.startDate,
					title: added.title,
				};

				const addedAppointmentAndRefreshDadaAppointment = async () => {
					const addedAppointmentFromServer = await addedAppointment(addedData);
					const dataAdded = [...data, { ...addedAppointmentFromServer }];
					setData(dataAdded);
				};
				addedAppointmentAndRefreshDadaAppointment();
			}

			if (changed) {
				const dataChanged: AppointmentModel[] = data.map(
					(appointment: AppointmentModel) => {
						if (appointment.id !== undefined) {
							return changed[appointment.id]
								? { ...appointment, ...changed[appointment.id] }
								: appointment;
						}
						return appointment;
					}
				);
				setData(dataChanged);

				const appointmentChanged = dataChanged.filter(
					(appointment: AppointmentModel) => {
						return appointment.id !== undefined
							? changed[appointment.id]
							: appointment;
					}
				);
				changedAppointment(appointmentChanged[0]);
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
