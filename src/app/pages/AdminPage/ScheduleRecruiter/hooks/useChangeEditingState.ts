import { useState, useCallback } from 'react';
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler';
import { schedulerData } from '../db/schedulerData';
import { IUseChangeEditingState } from '../types';

export const useChangeEditingState = (): IUseChangeEditingState => {
	// eslint-disable-next-line prefer-const
	let [data, setData] = useState<Array<AppointmentModel>>(schedulerData);

	const commitChanges = useCallback(
		({ added, changed, deleted }: ChangeSet) => {
			if (added) {
				const idNum: number = data[data.length - 1].id as number;
				const startingAddedId = data.length > 0 ? idNum + 1 : 0;
				data = [
					...data,
					{
						id: startingAddedId,
						endDate: added.endDate,
						startDate: added.startDate,
						...added,
					},
				];
				setData(data);
			}
			if (changed) {
				data = data.map((appointment: AppointmentModel) => {
					if (appointment.id !== undefined) {
						return changed[appointment.id]
							? { ...appointment, ...changed[appointment.id] }
							: appointment;
					}
					return null;
				});
				setData(data);
			}
			if (deleted !== undefined) {
				data = data.filter((appointment) => appointment.id !== deleted);
				setData(data);
			}
		},
		[data, setData]
	);

	return { commitChanges, data };
};
