import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler';

import moment from 'moment';
// import { schedulerData } from '../db/schedulerData';
import { schedulerData } from '../db/schedulerData';
import { IUseChangeEditingState } from '../types';

export const useChangeEditingState = (): IUseChangeEditingState => {
	// eslint-disable-next-line prefer-const
	let [data, setData] = useState<Array<AppointmentModel>>([]);

	useEffect(() => {
		axios({
			url: 'http://localhost:4000/schedulerData',
			method: 'get',
		}).then((resp: any) => {
			setData(resp.data);
		});
	}, []);

	const commitChanges = useCallback(
		({ added, changed, deleted }: ChangeSet) => {
			if (added) {
				const idNum: number = data[data.length - 1].id as number;
				const startingAddedId = data.length > 0 ? idNum + 1 : 0;
				data = [
					...data,
					{
						test: 'test',
						id: startingAddedId,
						startDate: new Date(added.startDate).getTime(),
						endDate: new Date(added.endDate).getTime(),
						...added,
					},
				];
				setData(data);

				axios({
					url: 'http://localhost:4000/schedulerData',
					method: 'post',
					data: {
						...added,
						startDate: moment(added.startDate).valueOf(),
						endDate: moment(added.endDate).valueOf(),
					},
					headers: { 'Content-Type': 'application/json' },
				});
			}

			if (changed) {
				data = data.map((appointment: AppointmentModel) => {
					if (appointment.id !== undefined) {
						if (changed[appointment.id]) {
							axios({
								url: `http://localhost:4000/schedulerData/${appointment.id}`,
								method: 'put',
								data: {
									...appointment,
									...changed[appointment.id],
								},
								headers: { 'Content-Type': 'application/json' },
							});
							return { ...appointment, ...changed[appointment.id] };
						}
						return appointment;
					}
					return null;
				});
				setData(data);
			}

			if (deleted !== undefined) {
				data = data.filter((appointment) => appointment.id !== deleted);
				data.forEach((appointment) => {
					if (appointment.id !== deleted) {
						axios({
							url: `http://localhost:4000/schedulerData/${appointment.id}`,
							method: 'delete',
						});
					}
				});
				setData(data);
			}
		},
		[data, setData]
	);

	return { commitChanges, data };
};
