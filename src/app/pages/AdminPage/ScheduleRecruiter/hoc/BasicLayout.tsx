import React, { useEffect, useState } from 'react';

import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { MenuItem, FormControl, Select } from '@material-ui/core';
import { databaseCandidates } from '../db/databaseCandidates';
import { TitleLable, PreferablyTime } from '../components';

import IDatabaseCandidates from '../types/IDatabaseCandidates';

export const BasicLayout:
	| React.ComponentType<AppointmentForm.BasicLayoutProps>
	| undefined = ({ onFieldChange, appointmentData, ...restProps }) => {
	const [state, setState] = useState<IDatabaseCandidates>({
		nameUser: 'Karl Greening',
		id: 4,
		periodTime: 'from 08:00 to 12:00',
	});

	const [userName, setUserName] = useState('');

	const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
		setUserName(e.target.value as string);
		databaseCandidates.forEach((candidate) => {
			if (candidate.id === e.target.value) setState(candidate);
		});
	};

	useEffect(() => {
		onFieldChange({ title: state.nameUser });
	}, [state]);

	useEffect(() => {
		return appointmentData.title !== undefined
			? onFieldChange({ title: appointmentData.title })
			: onFieldChange({ title: state.nameUser });
	}, []);

	return (
		<AppointmentForm.BasicLayout
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			<TitleLable>Choose a candidate</TitleLable>

			<FormControl variant="outlined" fullWidth>
				<Select
					value={userName}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem value="" disabled>
						Choose another a candidate
					</MenuItem>
					{databaseCandidates.map(({ id, nameUser }: IDatabaseCandidates) => (
						<MenuItem key={id} value={id}>
							{nameUser}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<TitleLable>Preferred time for an interview</TitleLable>
			<PreferablyTime>{state.periodTime}</PreferablyTime>
		</AppointmentForm.BasicLayout>
	);
};
