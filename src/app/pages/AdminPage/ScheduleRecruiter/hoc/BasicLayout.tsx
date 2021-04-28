import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';

import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { databaseCandidates } from '../helpers/databaseCandidates';

export const BasicLayout:
	| React.ComponentType<AppointmentForm.BasicLayoutProps>
	| undefined = ({ onFieldChange, appointmentData, ...restProps }) => {
	const onCustomFieldChange = (nextValue: string | number): void => {
		onFieldChange({ customField: nextValue });
	};

	const onCustomValueChange = (nextValue: string | number): void => {
		onFieldChange({ title: nextValue });
	};

	return (
		<AppointmentForm.BasicLayout
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			<AppointmentForm.Select
				value="non text"
				onValueChange={onCustomValueChange}
				type="outlinedSelect"
				availableOptions={databaseCandidates}
			/>

			<AppointmentForm.Label text="Custom Field" type="titleLabel" />
			<AppointmentForm.TextEditor
				value={appointmentData.customField}
				onValueChange={onCustomFieldChange}
				placeholder="Custom field"
				readOnly={false}
				type="titleTextEditor"
			/>
		</AppointmentForm.BasicLayout>
	);
};
