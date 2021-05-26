import React from 'react';

import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui';
import { Box } from '@material-ui/core';
import { ButtonLeaveSchedule } from '../ButtonLeaveSchedule';
import { RadionButtonRole } from '../RadionButtonRole';

export const FlexibleSpace: React.ComponentType<Toolbar.FlexibleSpaceProps> = ({
	...restProps
}) => {
	return (
		<Toolbar.FlexibleSpace {...restProps}>
			<Box display="flex">
				<RadionButtonRole />
				<ButtonLeaveSchedule />
			</Box>
		</Toolbar.FlexibleSpace>
	);
};
