import React from 'react';

import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui';
import { ButtonLeaveSchedule } from '../ButtonLeaveSchedule';

export const FlexibleSpace: React.ComponentType<Toolbar.FlexibleSpaceProps> = ({
	...restProps
}) => {
	return (
		<Toolbar.FlexibleSpace {...restProps}>
			<ButtonLeaveSchedule />
		</Toolbar.FlexibleSpace>
	);
};
