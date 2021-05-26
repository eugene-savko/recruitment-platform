import { useState, useCallback, useEffect, useContext } from 'react';
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler';
import {
	putAppointment,
	fetchListAppointments,
	addedAppointment,
} from 'app/API/scheduleRecruiter';

import { AdminPanelContext } from 'app/contexts/AdminPanelContext';
import { SwitcherRolesContext } from 'app/contexts/SwitcherRolesContext';
import { IUseChangeEditingState } from '../types';

export const useChangeEditingState = (): IUseChangeEditingState => {
	const [data, setData] = useState<Array<AppointmentModel>>([]);
	const { userId } = useContext(AdminPanelContext);
	const { switchedRole } = useContext(SwitcherRolesContext);
	const { internshipId } = useContext(AdminPanelContext);
	useEffect(() => {
		const fetchData = async () => {
			const listAppointments = await fetchListAppointments(
				switchedRole,
				internshipId
			);

			setData(listAppointments);
		};
		fetchData();
	}, [switchedRole]);

	const commitChanges = useCallback(
		({ added, changed }: ChangeSet) => {
			if (added) {
				const addedData = {
					recruiterId: added.members,
					startDate: new Date(added.startDate).getTime(),
					endDate: new Date(added.endDate).getTime(),
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

				const [appointmentChanged] = dataChanged.filter((appointment) => {
					return appointment.id !== undefined
						? changed[appointment.id]
						: appointment;
				});

				putAppointment(userId, appointmentChanged);
			}
		},
		[data, setData]
	);

	return { commitChanges, data };
};
