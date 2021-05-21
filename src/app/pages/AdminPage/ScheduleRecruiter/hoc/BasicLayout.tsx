// todo alert time
import React, { useState } from 'react';

import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { fetchCurrentCandidate } from 'app/API/scheduleRecruiter';
import { TitleLabel, PreferablyTime } from '../components';
import { ICurrentCandidate } from '../types';

export const BasicLayout: React.ComponentType<AppointmentForm.BasicLayoutProps> = ({
	onFieldChange,
	appointmentData,
	...restProps
}) => {
	const [profileCandidate, setProfileCandidate] = useState<ICurrentCandidate>();

	if (appointmentData.title === '') {
		const getCurrentCandidate = async () => {
			// 	//! --------------------------------------------------------передача текущего кандидата
			const gettedCurrentCandidate = await fetchCurrentCandidate(21);
			const { firstName, lastName } = gettedCurrentCandidate;
			const fullNameCandidate = { title: `${firstName} ${lastName}` };
			setProfileCandidate(gettedCurrentCandidate);
			return onFieldChange(fullNameCandidate);
		};
		getCurrentCandidate();
	}

	return (
		<AppointmentForm.BasicLayout
			readOnly
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			<TitleLabel>Preferred time for an interview</TitleLabel>
			<PreferablyTime>{profileCandidate?.perProfile}</PreferablyTime>
		</AppointmentForm.BasicLayout>
	);
};
