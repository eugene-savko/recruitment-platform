import React from 'react';
import { Avatar, Box, Divider, List, Typography } from '@material-ui/core';
import NavItem from './NavItem';
import { user } from '../helpers/user';
import { items } from '../helpers/items';

export const SideBarContent = () => (
	<Box
		style={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
		}}
	>
		<Box
			style={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				padding: '16px',
			}}
		>
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
		</Box>

		<Divider />

		<Box style={{ padding: 'p' }}>
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
		<Box style={{ flexGrow: 1 }} />
		<Box
			style={{
				backgroundColor: 'background.default',
				margin: '16px',
				padding: '16px',
			}}
		/>
	</Box>
);
