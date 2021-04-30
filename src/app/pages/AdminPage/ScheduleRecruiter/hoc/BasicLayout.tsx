import React from 'react';

import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { TextField } from '@material-ui/core';
import { databaseCandidates } from '../helpers/databaseCandidates';
import { PrefInterviewTime } from '../components/PrefInterviewTime';

export const BasicLayout:
	| React.ComponentType<AppointmentForm.BasicLayoutProps>
	| undefined = ({ onFieldChange, appointmentData, ...restProps }) => {
	const onCustomValueChange = (nextValue: string | number): void => {
		onFieldChange({ title: nextValue });
	};

	return (
		<AppointmentForm.BasicLayout
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			<PrefInterviewTime>Choose a candidate</PrefInterviewTime>
			<AppointmentForm.Select
				value=""
				onValueChange={onCustomValueChange}
				type="outlinedSelect"
				availableOptions={databaseCandidates}
			/>

			<PrefInterviewTime>Preferred interview time</PrefInterviewTime>
			<TextField
				disabled
				fullWidth
				defaultValue="from 9:30 to 12:30"
				variant="outlined"
			/>
		</AppointmentForm.BasicLayout>
	);
};
