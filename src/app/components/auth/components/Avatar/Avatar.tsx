import React from 'react';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Grid } from '@material-ui/core';
import { SAvatar } from '../../styled/style';

export const Avatar: React.FC = () => (
	<Grid
		container
		spacing={0}
		direction="column"
		alignItems="center"
		justify="center"
	>
		<SAvatar>
			<LockOutlinedIcon />
		</SAvatar>
		<h2>Личный кабинет</h2>
	</Grid>
);
