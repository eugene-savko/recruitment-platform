import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import React from 'react';

export const AppointmentExpared: React.ComponentType<Appointments.AppointmentProps> = ({
	children,
	...restProps
}) => {
	const expiredDate = new Date() > new Date(restProps.data.endDate);

	const restPropsExpiredDate = {
		data: restProps.data,
		resources: restProps.resources,
		draggable: false,
	};

	if (expiredDate) {
		return (
			<Appointments.Appointment
				{...restPropsExpiredDate}
				style={
					expiredDate ? { backgroundColor: '#ef9a9a', borderRadius: '2px' } : {}
				}
			>
				{children}
			</Appointments.Appointment>
		);
	}

	return (
		<Appointments.Appointment {...restProps}>
			{children}
		</Appointments.Appointment>
	);
};
