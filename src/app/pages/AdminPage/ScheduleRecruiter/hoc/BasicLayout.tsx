import React, { useEffect, useState } from 'react';

import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

import { MenuItem, FormControl, Select } from '@material-ui/core';
import { TitleLabel, PreferablyTime } from '../components';

import IDatabaseCandidates from '../types/IDatabaseCandidates';
import {
	fetchCurrentCandidate,
	fetchListCandidate,
} from '../../../../API/scheduleRecruiter';

export const BasicLayout: React.ComponentType<AppointmentForm.BasicLayoutProps> = ({
	onFieldChange,
	appointmentData,
	...restProps
}) => {
	interface ICurrentCandidate {
		[name: string]: string | number;
	}

	const [state, setState] = useState<IDatabaseCandidates>({
		nameUser: 'Karl Greening',
		id: 4,
		periodTime: 'from 08:00 to 12:00',
	});

	const [currentCandidate, setCurrentCandidate] = useState<ICurrentCandidate>();
	const [userName, setUserName] = useState('');
	const [listCandidate, setListCandidate] = useState<
		Array<IDatabaseCandidates>
	>([]);

	useEffect(() => {
		const getCurrentCandidate = async () => {
			const gettedCurrentCandidate = await fetchCurrentCandidate(2);
			onFieldChange({
				title: `${gettedCurrentCandidate.firstName} ${gettedCurrentCandidate.lastName}`,
			});
			setCurrentCandidate(gettedCurrentCandidate);
		};
		getCurrentCandidate();
	}, []);

	useEffect(() => {
		const getlistCandidate = async () => {
			const gettedlistCandidate = await fetchListCandidate();
			setListCandidate(gettedlistCandidate);
		};
		getlistCandidate();
	}, []);

	useEffect(() => {
		return appointmentData.title !== undefined
			? onFieldChange({ title: appointmentData.title })
			: onFieldChange({ title: state.nameUser });
	}, []);

	useEffect(() => {
		onFieldChange({ title: state.nameUser });
	}, [state, setCurrentCandidate]);

	const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
		setUserName(e.target.value as string);
		listCandidate.forEach((candidate) => {
			if (candidate.id === e.target.value) setState(candidate);
		});
	};

	return (
		<AppointmentForm.BasicLayout
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			<TitleLabel>Choose a candidate</TitleLabel>

			<FormControl variant="outlined" fullWidth>
				<Select
					value={userName}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem value="" disabled>
						Choose another a candidate
					</MenuItem>
					{listCandidate.map(({ id, nameUser }: IDatabaseCandidates) => (
						<MenuItem key={id} value={id}>
							{nameUser}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<TitleLabel>Preferred time for an interview</TitleLabel>
			<PreferablyTime>{state.periodTime}</PreferablyTime>
		</AppointmentForm.BasicLayout>
	);
};
