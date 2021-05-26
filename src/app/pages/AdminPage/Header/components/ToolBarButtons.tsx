import React from 'react';
import { Box, Hidden, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AppRoutePath } from 'app/route-paths';

export const ToolBarButtons: React.FunctionComponent = () => {
	const history = useHistory();

	function logOut() {
		history.push(AppRoutePath.LOGIN);
	}

	return (
		<Hidden only={['xs', 'sm']}>
			<Box style={{ marginLeft: 'auto' }}>
				<IconButton color="inherit" onClick={logOut}>
					<ExitToAppIcon />
				</IconButton>
			</Box>
		</Hidden>
	);
};
