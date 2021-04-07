import React from 'react';
import { Box, Hidden, IconButton } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

export const ToolBarButtons: React.FC = () => (
	<Hidden only={['xs', 'sm']}>
		<Box style={{ marginLeft: 'auto' }}>
			<IconButton color="inherit">
				<InputIcon />
			</IconButton>
		</Box>
	</Hidden>
);
