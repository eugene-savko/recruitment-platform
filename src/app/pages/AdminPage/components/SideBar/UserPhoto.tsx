/* eslint-disable camelcase */
import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { SideBarAvatarWrapper } from './components';
import { user } from './helpers/user';

export const UserPhoto: React.FunctionComponent = () => {
	return (
		<SideBarAvatarWrapper>
			<Avatar
				src={user.avatar}
				style={{
					cursor: 'pointer',
					width: 64,
					height: 64,
				}}
			/>
			<Typography color="textPrimary" variant="h5">
				Jon Doe
			</Typography>
			<Typography color="textSecondary" variant="body2">
				JonDoe@gmail.com
			</Typography>
		</SideBarAvatarWrapper>
	);
};
