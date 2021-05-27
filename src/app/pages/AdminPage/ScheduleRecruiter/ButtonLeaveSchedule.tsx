import { IconButton } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AdminRoutePath } from '../routes';
import { ScheduleButtonLeave } from './components';

export const ButtonLeaveSchedule: React.FC = () => {
	const history = useHistory();
	const leaveSchedule = () => {
		history.push(`${AdminRoutePath.PROFILE}`);
	};

	return (
		<React.Fragment>
			<IconButton onClick={leaveSchedule}>
				<ScheduleButtonLeave />
			</IconButton>
		</React.Fragment>
	);
};
