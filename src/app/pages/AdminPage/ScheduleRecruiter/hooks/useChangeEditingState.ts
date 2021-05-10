// todo убрать радио button
// todo кнопуку выхода на profile
// todo отправку данных текущего кандидата на сервер
// todo добавить рекрутера в профиль кандидата
import { useState, useCallback, useEffect } from 'react';
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler';

import {
	deleteAppointment,
	changedAppointment,
	fetchListAppointments,
	addedAppointment,
} from 'app/API/scheduleRecruiter';
import moment from 'moment';
import { IUseChangeEditingState } from '../types';
import { putCurrentCandidate } from '../../../../API/scheduleRecruiter';

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
				const dataChanged: AppointmentModel[] = data.map(
					(appointment: AppointmentModel) => {
						if (appointment.id !== undefined) {
							return changed[appointment.id]
								? {
										...appointment,
										...changed[appointment.id],
										startDate: moment(appointment.startDate).valueOf(),
										endDate: moment(appointment.endDate).valueOf(),
								  }
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
				console.log(appointmentChanged[0]);
				changedAppointment(appointmentChanged[0]);
				putCurrentCandidate(appointmentChanged[0], 1);
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
