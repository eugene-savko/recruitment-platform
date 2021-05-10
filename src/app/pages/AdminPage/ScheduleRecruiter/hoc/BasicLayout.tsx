import React, { useEffect, useState } from 'react';

import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { fetchCurrentCandidate } from 'app/API/scheduleRecruiter';
import { TitleLabel, PreferablyTime } from '../components';
import { ICurrentCandidate } from '../types';

export const BasicLayout: React.ComponentType<AppointmentForm.BasicLayoutProps> = ({
	onFieldChange,
	appointmentData,
	...restProps
}) => {
	const [currentCandidate, setCurrentCandidate] = useState<ICurrentCandidate>();

	useEffect(() => {
		const getCurrentCandidate = async () => {
			const gettedCurrentCandidate = await fetchCurrentCandidate(1);
			setCurrentCandidate(gettedCurrentCandidate);

			return appointmentData.title !== undefined
				? onFieldChange({ title: appointmentData.title })
				: onFieldChange({
						title: `${gettedCurrentCandidate.firstName} ${gettedCurrentCandidate.lastName}`,
				  });
		};
		getCurrentCandidate();
	}, []);

	return (
		<AppointmentForm.BasicLayout
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			<TitleLabel>Preferred time for an interview</TitleLabel>
			<PreferablyTime>{currentCandidate?.periodTime}</PreferablyTime>
		</AppointmentForm.BasicLayout>
	);
};
