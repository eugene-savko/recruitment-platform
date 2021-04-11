/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Avatar, Divider, List, Typography } from '@material-ui/core';
import { AuthContext } from 'app/context/AuthContext';
import NavItem from './NavItem';
import { items } from './helpers/items';
import { SideBarAvatarWrapper, SideBarContentWrapper } from './components';

export const SideBarContent: React.FunctionComponent = () => {
	const {
		dataFromServer: { avatar, first_name, last_name, email },
	} = useContext(AuthContext);
	return (
		<SideBarContentWrapper>
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

			<Divider />

			<List>
				{items.map((item) => (
					<NavItem
						key={item.title}
						href={item.href}
						title={item.title}
						icon={item.icon}
					/>
				))}
			</List>
		</SideBarContentWrapper>
	);
};
