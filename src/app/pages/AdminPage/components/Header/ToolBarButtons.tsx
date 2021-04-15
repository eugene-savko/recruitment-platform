import React, { useContext } from 'react';
import { Box, Hidden, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { LogOut as LogOutIcon } from 'react-feather';
import { AuthLoggedContext } from 'app/context/AuthLoggedContext';

export const ToolBarButtons: React.FunctionComponent = () => {
	const history = useHistory();
	const { setIsLogged } = useContext(AuthLoggedContext);

	const logOut = () => {
		setIsLogged?.(false);
		history.push('/');
	};

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
