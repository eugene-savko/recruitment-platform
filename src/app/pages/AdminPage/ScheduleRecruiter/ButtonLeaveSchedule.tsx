import { IconButton } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ScheduleButtonLeave } from './components';

export const ButtonLeaveSchedule: React.FC = () => {
	const history = useHistory();
	const leaveSchedule = () => {
		history.push('/profile');
	};

	return (
		<React.Fragment>
			<IconButton>
				<ScheduleButtonLeave onClick={leaveSchedule} />
			</IconButton>
		</React.Fragment>
	);
};
