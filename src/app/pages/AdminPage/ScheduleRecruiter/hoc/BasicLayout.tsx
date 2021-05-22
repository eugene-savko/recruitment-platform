// todo alert time
import React, { useContext, useState } from 'react';
import dateFormat from 'dateformat';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { fetchCurrentCandidate } from 'app/API/scheduleRecruiter';
import { authContext } from 'app/context/AuthLoggedContext';
import { TitleLabel, PreferablyTime } from '../components';
import { ICurrentCandidate } from '../types';
import { AdminPanelContext } from '../../../../context/AdminPanelContext';

export const BasicLayout: React.ComponentType<AppointmentForm.BasicLayoutProps> = ({
	onFieldChange,
	appointmentData,
	...restProps
}) => {
	const { userId } = useContext(AdminPanelContext);
	const { auth } = useContext(authContext);
	const role = auth.dataRole?.role as string;
	const [profileCandidate, setProfileCandidate] = useState<ICurrentCandidate>();
	const preferredTime = `
	from ${dateFormat(
		profileCandidate?.startPriorityTime,
		'isoTime'
	)} to ${dateFormat(profileCandidate?.endPriorityTime, 'isoTime')}`;

	if (appointmentData.title === '') {
		const getCurrentCandidate = async () => {
			const gettedCurrentCandidate = await fetchCurrentCandidate(userId);
			const { firstName, lastName } = gettedCurrentCandidate;
			const fullNameCandidate = { title: `${firstName} ${lastName}` };
			setProfileCandidate(gettedCurrentCandidate);
			return onFieldChange(fullNameCandidate);
		};

		getCurrentCandidate();
	}

	return (
		<AppointmentForm.BasicLayout
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
