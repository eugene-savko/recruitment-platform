import { useState, useCallback, useEffect, useContext } from 'react';
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler';
import {
	deleteAppointment,
	putAppointment,
	fetchListAppointments,
	addedAppointment,
	patchCurrentCandidate,
} from 'app/API/scheduleRecruiter';
import { AdminPanelContext } from 'app/context/AdminPanelContext';
import { SwitcherRolesContext } from 'app/context/SwitcherRolesContext';
import { IUseChangeEditingState, IListRecruiters } from '../types';

export const useChangeEditingState = (
	listRecruters: Array<IListRecruiters>
): IUseChangeEditingState => {
	const [data, setData] = useState<Array<AppointmentModel>>([]);
	const { userId } = useContext(AdminPanelContext);
	const { switchedRole } = useContext(SwitcherRolesContext);
	//! -----------------------------------------------------------pass role

	useEffect(() => {
		const fetchData = async () => {
			const listAppointments = await fetchListAppointments(switchedRole, 1);
			setData(listAppointments);
		};
		fetchData();
	}, [switchedRole]);

	const commitChanges = useCallback(
		({ added, changed, deleted }: ChangeSet) => {
			if (added) {
				const addedData = {
					title: '',
					allDay: added.allDay,
					members: added.members,
					endDate: new Date(added.endDate).getTime(),
					startDate: new Date(added.startDate).getTime(),
				};

				const addedAppointmentAndRefreshDadaAppointment = async () => {
					const addedAppointmentFromServer = await addedAppointment(
						addedData,
						switchedRole,
						1
					);
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

				putAppointment(switchedRole, 1, appointmentChanged);

				const [currentRecruiter] = listRecruters.filter(
					(recruiter: IListRecruiters) =>
						recruiter.id === appointmentChanged.members
				);
				patchCurrentCandidate(
					appointmentChanged,
					userId,
					currentRecruiter.text
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
