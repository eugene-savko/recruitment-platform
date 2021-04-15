/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ListItem } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';

import { SideBarListItemIcon, SideBarListItemText } from './components';
import { ISideBarItems } from './types';

const NavItem: React.FunctionComponent<ISideBarItems> = ({
	href,
	icon: Icon,
	title,
}: ISideBarItems) => (
	<ListItem component={RouterLink} to={href} button key={title}>
		<SideBarListItemIcon>
			<Icon />
		</SideBarListItemIcon>
		<SideBarListItemText primary={title} />
	</ListItem>
);
export default NavItem;
