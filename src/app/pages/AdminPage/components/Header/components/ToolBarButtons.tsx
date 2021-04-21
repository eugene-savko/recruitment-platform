import React from 'react';
import { Box, Hidden, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { LogOut as LogOutIcon } from 'react-feather';

export const ToolBarButtons: React.FunctionComponent = () => {
	const history = useHistory();

	function logOut() {
		history.push('/');
		localStorage.setItem('IsLoaded', 'false');
	}

	return (
		<Hidden only={['xs', 'sm']}>
			<Box style={{ marginLeft: 'auto' }}>
				<IconButton color="inherit" onClick={logOut}>
					<LogOutIcon />
				</IconButton>
			</Box>
		</Hidden>
	);
};
