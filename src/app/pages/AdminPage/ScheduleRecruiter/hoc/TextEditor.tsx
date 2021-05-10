import React from 'react';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

export const TextEditor: React.ComponentType<AppointmentForm.TextEditorProps> = ({
	type,
	...restProps
}) => {
	if (type === 'multilineTextEditor') {
		return null;
	}

	return (
		<AppointmentForm.TextEditor
			type="titleTextEditor"
			{...restProps}
			readOnly={type === 'titleTextEditor'}
		/>
	);
};
