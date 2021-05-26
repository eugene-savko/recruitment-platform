import React from 'react';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

export const BooleanEditor: React.ComponentType<AppointmentForm.BooleanEditorProps> = ({
	label,
	...restProps
}) => {
	if (label) {
		return null;
	}
	return <AppointmentForm.BooleanEditor {...restProps} />;
};
