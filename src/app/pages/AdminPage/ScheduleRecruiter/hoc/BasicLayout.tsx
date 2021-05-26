import React, { useContext, useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { fetchCurrentCandidate } from 'app/API/scheduleRecruiter';
import { authContext } from 'app/context/AuthLoggedContext';
import { AuthCircularProgress } from 'app/pages/AuthPage/Auth/components';
import { TitleLabel, PreferablyTime } from '../components';
import { ICurrentCandidate } from '../types';
import { AdminPanelContext } from '../../../../context/AdminPanelContext';
import Preloader from '../../components/Preloader';

export const BasicLayout: React.ComponentType<AppointmentForm.BasicLayoutProps> = ({
	onFieldChange,
	appointmentData,
	...restProps
}) => {
	const { userId } = useContext(AdminPanelContext);
	const { auth } = useContext(authContext);
	const role = auth.dataRole?.role as string;
	const [profileCandidate, setProfileCandidate] = useState<ICurrentCandidate>();
	const [loading, setLoading] = useState(false);

	const preferredTimeStart = profileCandidate?.startPriorityTime;
	const prefferredTimeEnd = profileCandidate?.endPriorityTime;

	const preferredTime = `from ${dateFormat(
		preferredTimeStart,
		'shortTime',
		true
	)} to ${dateFormat(prefferredTimeEnd, 'shortTime', true)}`;

	useEffect(() => {
		if (appointmentData.title === ' ' && userId) {
			const getCurrentCandidate = async () => {
				const gettedCurrentCandidate = await fetchCurrentCandidate(userId);
				const { firstName, lastName } = gettedCurrentCandidate;
				const fullNameCandidate = { title: `${firstName} ${lastName}` };
				setProfileCandidate(gettedCurrentCandidate);
				setLoading(false);
				onFieldChange(fullNameCandidate);
				// return onFieldChange(fullNameCandidate);
			};

			getCurrentCandidate();
		}
	}, [appointmentData, userId]);

	if (appointmentData.title === ' ' && loading) {
		return (
			<AuthCircularProgress>
				<Preloader />
			</AuthCircularProgress>
		);
	}

	return (
		<AppointmentForm.BasicLayout
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			{role !== 'SPECIALIST' && (
				<React.Fragment>
					<TitleLabel>Preferred time for an interview</TitleLabel>
					<PreferablyTime>
						{appointmentData.title
							? preferredTime
							: 'No preferred time assigned'}
					</PreferablyTime>
				</React.Fragment>
			)}
		</AppointmentForm.BasicLayout>
	);
};
