import React from 'react';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

export const BooleanEditor: React.ComponentType<AppointmentForm.BooleanEditorProps> = ({
	...restProps
}) => {
	return <AppointmentForm.BooleanEditor readOnly {...restProps} />;
};
