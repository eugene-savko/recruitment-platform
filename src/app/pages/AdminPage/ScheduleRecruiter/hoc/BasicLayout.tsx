import React, { useEffect, useState } from 'react';

import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { MenuItem, TextField, FormControl, Select } from '@material-ui/core';
import { databaseCandidates } from '../helpers/databaseCandidates';
import { TitleLable } from '../components/TitleLable';
import IDatabaseCandidates from '../types/IDatabaseCandidates';

export const BasicLayout:
	| React.ComponentType<AppointmentForm.BasicLayoutProps>
	| undefined = ({ onFieldChange, appointmentData, ...restProps }) => {
	const [state] = useState({
		nameUser: 'Karl Greening',
		id: 4,
		periodTime: 'from 10:00 to 12:00',
	});

	const [userName, setUserName] = useState('');
	const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
		onFieldChange({ title: e.target.value });
		setUserName(e.target.value as string);
	};

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
						<MenuItem key={id} value={nameUser}>
							{nameUser}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<TitleLable>Preferred time for an interview</TitleLable>
			<TextField
				disabled
				fullWidth
				defaultValue={state.periodTime}
				variant="outlined"
			/>
		</AppointmentForm.BasicLayout>
	);
};
