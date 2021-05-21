// todo alert time
import React, { useContext, useState } from 'react';
import dateFormat from 'dateformat';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { fetchCurrentCandidate } from 'app/API/scheduleRecruiter';
import { authContext } from 'app/context/AuthLoggedContext';
import { TitleLabel, PreferablyTime } from '../components';
import { ICurrentCandidate } from '../types';

export const BasicLayout: React.ComponentType<AppointmentForm.BasicLayoutProps> = ({
	onFieldChange,
	appointmentData,
	...restProps
}) => {
	const [profileCandidate, setProfileCandidate] = useState<ICurrentCandidate>();
	const preferredTime = `
	from ${dateFormat(
		profileCandidate?.startPriorityTime,
		'isoTime'
	)} to ${dateFormat(profileCandidate?.endPriorityTime, 'isoTime')}`;
	const { auth } = useContext(authContext);
	const role = auth.dataRole?.role as string;

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
			{role === 'RECRUITER' && (
				<React.Fragment>
					<TitleLabel>Preferred time for an interview</TitleLabel>
					<PreferablyTime>{preferredTime}</PreferablyTime>
				</React.Fragment>
			)}
		</AppointmentForm.BasicLayout>
	);
};
