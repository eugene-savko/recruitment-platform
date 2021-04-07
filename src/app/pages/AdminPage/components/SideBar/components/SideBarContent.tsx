import React from 'react';
import { Avatar, Box, Divider, List, Typography } from '@material-ui/core';
import NavItem from './NavItem';
import { user } from '../helpers/user';
import { items } from '../helpers/items';
import { SideBarAvatarWrapper, SideBarContentWrapper } from '../Styled';

export const SideBarContent: React.FC = () => (
	<SideBarContentWrapper>
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
				{user.name}
			</Typography>
			<Typography color="textSecondary" variant="body2">
				{user.jobTitle}
			</Typography>
		</SideBarAvatarWrapper>
		<Divider />
		<Box>
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
		</Box>
	</SideBarContentWrapper>
);
