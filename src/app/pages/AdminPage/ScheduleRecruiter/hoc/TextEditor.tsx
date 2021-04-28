import React from 'react';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

export const TextEditor:
	| React.ComponentType<AppointmentForm.TextEditorProps>
	| undefined = (props) => {
	// eslint-disable-next-line react/destructuring-assignment
	if (props.type === 'multilineTextEditor') {
		return null;
	}
	return <AppointmentForm.TextEditor {...props} />;
};
