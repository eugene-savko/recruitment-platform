import React from 'react';
import { Badge, Box, Hidden, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

export const ToolBarButtons = () => {
	console.log('ToolBarButtons');
	return (
		<Hidden only={['xs', 'sm']}>
			<Box style={{ marginLeft: 'auto' }}>
				<IconButton color="inherit">
					<Badge color="primary" variant="dot">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton color="inherit">
					<InputIcon />
				</IconButton>
			</Box>
		</Hidden>
	);
};
