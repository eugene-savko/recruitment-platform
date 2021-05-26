/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { authContext } from 'app/contexts/AuthLoggedContext';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { SideBarAvatarWrapper } from './components';

export const UserPhoto: React.FunctionComponent = () => {
	const {
		auth: { dataRole },
	} = useContext(authContext);

	const namePerson =
		`${dataRole?.firstName} ${dataRole?.lastName}` || 'No name';

	const roleLowerCase = () => {
		const FirstLaterUpperCase = dataRole?.role[0];
		const AnotherLaterLowerCase = dataRole?.role.slice(1).toLowerCase();
		const specialization = `${FirstLaterUpperCase}${AnotherLaterLowerCase}`;
		return specialization;
	};

	return (
		<SideBarAvatarWrapper>
			{dataRole?.photo ? (
				<Avatar src={dataRole?.photo} style={{ width: 64, height: 64 }} />
			) : (
				<AccountCircleIcon color="primary" style={{ width: 64, height: 64 }} />
			)}
			<Typography color="textSecondary" variant="h5">
				{namePerson}
			</Typography>
			<Typography color="textSecondary" variant="body2">
				{roleLowerCase()}
			</Typography>
			<Typography color="textSecondary" variant="body2">
				{dataRole?.email || 'No email'}
			</Typography>
		</SideBarAvatarWrapper>
	);
};
