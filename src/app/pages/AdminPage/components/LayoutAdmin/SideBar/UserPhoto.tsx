/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { AuthContext } from 'app/context/AuthContext';
import { SideBarAvatarWrapper } from './components';

export const UserPhoto: React.FunctionComponent = () => {
	const {
		dataFromServer: { avatar, first_name, last_name, email },
	} = useContext(AuthContext);
	return (
		<SideBarAvatarWrapper>
			<Avatar
				src={avatar}
				style={{
					cursor: 'pointer',
					width: 64,
					height: 64,
				}}
			/>
			<Typography color="textPrimary" variant="h5">
				{`${first_name} ${last_name}`}
			</Typography>
			<Typography color="textSecondary" variant="body2">
				{email}
			</Typography>
		</SideBarAvatarWrapper>
	);
};
