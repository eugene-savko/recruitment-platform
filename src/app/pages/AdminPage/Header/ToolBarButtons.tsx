import React, { useContext } from 'react';
import { Box, Hidden, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AppRoutePath } from 'app/route-paths';
import { authContext } from 'app/contexts/AuthLoggedContext';

export const ToolBarButtons: React.FunctionComponent = () => {
	const history = useHistory();
	const { logOut } = useContext(authContext);
	const leavePage = () => {
		history.push(AppRoutePath.LOGIN);
		logOut?.();
	};

	return (
		<Hidden only={['xs', 'sm']}>
			<Box style={{ marginLeft: 'auto' }}>
				<IconButton color="inherit" onClick={leavePage}>
					<ExitToAppIcon />
				</IconButton>
			</Box>
		</Hidden>
	);
};
